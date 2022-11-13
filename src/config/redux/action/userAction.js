import axios from 'axios';
import {FUNCToast} from '../../function';
import {BASEURL, storage} from '../../helpers';
import http from '../../helpers/http';
import {navGoback} from '../../helpers/navigationRef';

export const setFormUser = (formType, formValue) => {
  return {type: 'FORM_USER', formType, formValue};
};

export const setDataUserInfo = () => {
  return async dispatch => {
    storage.delete('user.data');
    await http.get(`${BASEURL}/api/UserApps/GetUser`).then(res => {
      let data = res.data;
      if (data.isSuccess) {
        storage.set('user.data', JSON.stringify(data.data));
        dispatch({type: 'DATA_USER', payload: data.data});
      } else {
        FUNCToast('WARN', {msg: data.returnMessage});
      }
    });
  };
};

export const apiLogin = (iData, navigation) => {
  return async dispatch => {
    if (!iData.UsernameOrEmail) {
      FUNCToast('WARN', {msg: 'Masukan email atau username'});
      return;
    } else if (!iData.Password) {
      FUNCToast('WARN', {msg: 'Masukan password'});
      return;
    }
    FUNCToast('LOADING', {msg: 'sedang memuat...'});
    await axios
      .get(
        `${BASEURL}/api/UserApps/Login?UsernameOrEmail=${iData.UsernameOrEmail}&Password=${iData.Password}`,
      )
      .then(res => {
        let data = res.data;
        if (data.isSuccess) {
          storage.set('user.token', data.data);
          FUNCToast('SUCCESS', {msg: 'Anda berhasil login'});
          dispatch(setDataUserInfo());
          navigation.replace('Home');
        } else {
          FUNCToast('WARN', {msg: data.returnMessage});
        }
      })
      .catch(err => {
        FUNCToast('FAIL', {msg: err.message});
      });
  };
};

export const apiResetPassword = iData => {
  return async dispatch => {
    if (!iData.Email) {
      FUNCToast('WARN', {msg: 'Masukan email atau username'});
      return;
    }
    FUNCToast('LOADING', {msg: 'sedang memuat...'});
    await axios
      .post(`${BASEURL}/api/UserApps/ResetPassword?Email=${iData.Email}`)
      .then(res => {
        let data = res.data;
        if (data.isSuccess) {
          FUNCToast('SUCCESS', {
            msg: 'Anda berhasil reset password, selanjutnya silahkan cek email anda !',
          });
          navGoback();
        } else {
          FUNCToast('WARN', {msg: data.returnMessage});
        }
      })
      .catch(err => {
        FUNCToast('FAIL', {msg: err.message});
      });
  };
};

export const apiUpdateProfile = iData => {
  return async dispatch => {
    const fd = new FormData();
    fd.append('IdUser', iData.IdUser);
    fd.append('Email', iData.Email);
    fd.append('FirstName', iData.FirstName);
    fd.append('MiddleName', iData.MiddleName);
    fd.append('LastName', iData.LastName || '.');
    fd.append('Address', iData.Address);
    fd.append('PhoneNumber', iData.PhoneNumber);
    fd.append('MobileNumber', iData.MobileNumber);
    fd.append('FileUpload', iData.FileFoto);
    FUNCToast('LOADING', {msg: 'sedang memuat...'});
    await http
      .post(`${BASEURL}/api/UserApps/EditUser`, fd, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        transformRequest: fd => fd,
      })
      .then(res => {
        let data = res.data;
        if (data.isSuccess) {
          FUNCToast('SUCCESS', {msg: 'Berhasil memperbarui profil'});
          dispatch(setDataUserInfo());
          navGoback();
        } else {
          FUNCToast('WARN', {msg: data.returnMessage});
        }
      });
  };
};

export const apiChangePassword = iData => {
  return async dispatch => {
    const fd = new FormData();
    console.log(iData.OldPassword);
    fd.append('OldPassword', iData.OldPassword);
    fd.append('NewPassword1', iData.NewPassword1);
    fd.append('NewPassword2', iData.NewPassword2);
    FUNCToast('LOADING', {msg: 'sedang memuat...'});
    await http
      .post(`${BASEURL}/api/UserApps/ChangePassword`, fd, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        transformRequest: fd => fd,
      })
      .then(res => {
        let data = res.data;
        if (data.isSuccess) {
          FUNCToast('SUCCESS', {msg: 'Berhasil memperbarui password'});
          navGoback();
        } else {
          FUNCToast('WARN', {msg: data.returnMessage});
        }
      });
  };
};
