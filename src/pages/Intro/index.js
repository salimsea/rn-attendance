import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../utils';
import {useDispatch} from 'react-redux';
import {storage} from '../../config';
import {ActivityIndicator} from 'react-native-paper';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import CodePush from 'react-native-code-push';
import {setDataUserInfo} from '../../config/redux/action/userAction';

const Intro = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      CodePush.checkForUpdate().then(update => {
        if (!update) {
          console.log('The app is up to date!');

          const jsonUser = storage.getString('user.data');
          if (jsonUser) {
            dispatch(setDataUserInfo());
            navigation.replace('Home');
          } else {
            navigation.replace('Login');
          }
        } else {
          navigation.replace('UpdateApp');
        }
      });
    }, 3000);
  }, [navigation]);

  return (
    <>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor="transparent"
      />
      <View style={styles.page}>
        <View style={styles.content}>
          <ActivityIndicator
            animating={true}
            color={colors.primary}
            size="large"
          />
        </View>
      </View>
    </>
  );
};

export default Intro;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.black,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: getStatusBarHeight() + 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
