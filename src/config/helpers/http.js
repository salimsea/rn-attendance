import axios from 'axios';
import {FUNCToast} from '../function';
import {StackActions} from '@react-navigation/native';
import {navigationRef} from './navigationRef';
import {storage} from './mmkv';

export const http = axios.create({
  timeout: 60000,
  withCredentials: false,
  headers: {},
});

http.interceptors.request.use(
  async request => {
    const token = storage.getString('user.token');
    if (token && token.length > 0)
      request.headers.Authorization = `Bearer ${token}`;
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    FUNCToast('HIDE');
    let keys = ['@token', '@user'];
    if (error.response) {
      const {data} = error.response;
      if (error.response.status === 401) {
        if (
          data.name === 'NotAuthenticated' &&
          data.data &&
          data.data.name === 'TokenExpiredError'
        ) {
          storage.clearAll();
          setTimeout(() => {
            navigationRef.current?.dispatch(StackActions.replace('Login'));
            FUNCToast('FAIL', {msg: 'Token expired. Please try login again'});
          }, 2000);

          return Promise.reject({
            message: 'Token expired. Please try login again.',
          });
        } else {
          storage.clearAll();
          setTimeout(() => {
            navigationRef.current?.dispatch(StackActions.replace('Login'));
            FUNCToast('FAIL', {msg: error.message});
          }, 2000);
          console.log('error : ', error.message);
          return Promise.reject({
            message: error.message,
          });
        }
      } else {
        FUNCToast('FAIL', {msg: `${JSON.stringify(error.message)}`});
        let message = data.message || error.message;
        return Promise.reject({message, raw: data});
      }
    } else if (error.request) {
      FUNCToast('FAIL', {
        msg: `There is problem connecting to server. Please check your connection!`,
      });
    } else {
      return Promise.reject({message: error.message});
    }
  },
);

export default http;
