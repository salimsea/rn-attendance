import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {colors, fonts, fontSize} from '../../utils';
import SectionContent from './parts/SectionContent';
import {Button, Gap, Header2} from '../../components';
import {FUNCToast} from '../../config';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {Modal} from 'react-native-paper';
import {setFormUser} from '../../config/redux/action';

const User = () => {
  const {dataUser, modalPhoto} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const btnCamera = () => {
    FUNCToast('LOADING', {msg: 'sedang memuat...'});
    let options = {
      cameraType: 'front',
      mediaType: 'photo',
      quality: 0,
    };
    launchCamera(options, response => {
      FUNCToast('HIDE');
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        FUNCToast('FAIL', {msg: response.error});
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else if (response.errorCode === 'camera_unavailable') {
        FUNCToast('FAIL', {msg: response.errorCode});
      } else {
        if (typeof response.errorCode === 'undefined') {
          if (response.assets[0].fileSize > 2000000) {
            FUNCToast('WARN', {msg: 'Maksimal ukuran foto 2MB'});
            return;
          }

          var array = [];
          response.assets.map((v, i) => {
            array.push({
              uri: v.uri,
              type: v.type,
              name: v.fileName,
            });
          });

          dispatch(setFormUser('FileFoto', array[0]));
          onModalPhoto();
        } else {
          FUNCToast('FAIL', {msg: 'Izinkan kami untuk mengakses kamera!'});
        }
      }
    });
  };
  const btnGallery = () => {
    FUNCToast('LOADING', {msg: 'sedang memuat...'});
    let options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      FUNCToast('HIDE');
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        if (response.assets[0].fileSize > 2000000) {
          FUNCToast('WARN', {msg: 'Maksimal ukuran foto 2MB'});
          return;
        }
        var file = {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        };
        dispatch(setFormUser('FileFoto', file));
        onModalPhoto();
      }
    });
  };

  const onModalPhoto = () => {
    dispatch({
      type: 'MODAL_PHOTO',
      payload: !modalPhoto,
    });
  };

  return (
    <>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor="transparent"
      />
      <View style={styles.page}>
        <View style={styles.content}>
          {/* SECTION HEADER */}
          <Header2 title="Perbarui Akun" />

          {/* SECTION CONTENT */}
          <SectionContent onModalPhoto={onModalPhoto} data={dataUser} />
        </View>
      </View>
      <Modal
        style={{marginHorizontal: 20, borderRadius: 10}}
        visible={modalPhoto}
        onDismiss={() => onModalPhoto()}
        contentContainerStyle={styles.modalContainer}>
        <View>
          <TouchableOpacity onPress={() => btnCamera()}>
            <View style={{marginVertical: 10}}>
              <Text
                style={{
                  fontSize: fontSize.small + 2,
                  fontFamily: fonts.primary['normal'],
                  color: colors.dark,
                }}>
                Kamera
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => btnGallery()}>
            <View style={{marginVertical: 10}}>
              <Text
                style={{
                  fontSize: fontSize.small + 2,
                  fontFamily: fonts.primary['normal'],
                  color: colors.dark,
                }}>
                Galeri
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default User;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.black,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});
