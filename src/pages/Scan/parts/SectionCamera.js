import {Image, StyleSheet, Text, Vibration, View} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import base64 from 'react-native-base64';
import {FUNCToast} from '../../../config';
import {RNCamera} from 'react-native-camera';
import {colors} from '../../../utils';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {GIFLoadingQrscan} from '../../../assets';
import Geolocation from 'react-native-geolocation-service';
import {apiPegawaiCheckin} from '../../../config/redux/action';

const SectionCamera = ({navigation}) => {
  const cameraRef = useRef(null);
  const [isFlashOn, setIsFlashOn] = useState(false);
  const [isBackCam, setIsBackCam] = useState(false);
  const [isBarcodeRead, setIsBarcodeRead] = useState(false);
  const [barcodeType, setBarcodeType] = useState('');
  const [barcodeValue, setBarcodeValue] = useState('');
  const [boundBox, setBoundBox] = useState(null);
  const {formGlobal} = useSelector(state => state.globalReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isBarcodeRead) {
      postApi(barcodeValue);
    }
  }, [isBarcodeRead, barcodeType, barcodeValue]);

  const onBarcodeRead = event => {
    if (!isBarcodeRead) {
      setIsBarcodeRead(true);
      setBarcodeType(event.type);
      setBarcodeValue(event.data);
    }
  };

  const postApi = () => {
    try {
      var encode = base64.decode(barcodeValue);
      Vibration.vibrate(2 * 1000);
      setTimeout(() => {
        if (encode === 'Presences/PegawaiCheckin') {
          Geolocation.getCurrentPosition(location => {
            dispatch(apiPegawaiCheckin(location.coords, navigation));
          });
        } else {
          postCanceled();
        }
      }, 2000);
    } catch (error) {
      console.log('error : ', error);
      postCanceled();
    }
  };

  const postCanceled = () => {
    FUNCToast('WARN', {msg: 'QR Code tidak dikenal !'});

    setTimeout(() => {
      setIsBarcodeRead(false);
      setBarcodeType('');
      setBarcodeValue('');
    }, 5000);
  };

  return (
    <>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={
          !formGlobal.isBackCam
            ? RNCamera.Constants.Type.back
            : RNCamera.Constants.Type.front
        }
        flashMode={
          formGlobal.isFlashOn
            ? RNCamera.Constants.FlashMode.torch
            : RNCamera.Constants.FlashMode.off
        }
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onBarCodeRead={onBarcodeRead}
        onGoogleVisionBarcodesDetected={barcode => {
          if (barcode.barcodes.length !== 0) {
            setBoundBox(barcode.barcodes[0].bounds);
          } else {
            setBoundBox(null);
          }
        }}
        autoFocus={true}>
        <View style={styles.rectangle}>
          <View style={styles.rectangleColor} />
          <View style={styles.topLeft} />
          <View style={styles.topRight} />
          <View style={styles.bottomLeft} />
          <View style={styles.bottomRight} />
        </View>
      </RNCamera>
      {/* SECTION BOUNDINGBOX */}
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: hp('100%'),
          zIndex: 1,
        }}>
        {boundBox !== null && (
          <>
            <View
              style={{
                position: 'absolute',
                top: boundBox.origin.y - 20,
                left: boundBox.origin.x + 20,
                width: boundBox.size.width,
                height: boundBox.size.height,
              }}>
              <Image
                source={GIFLoadingQrscan}
                style={{
                  width: boundBox.size.width,
                  height: boundBox.size.width,
                }}
              />
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default SectionCamera;

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  rectangle: {
    position: 'absolute',
    borderLeftColor: 'rgba(0, 0, 0, .6)',
    borderRightColor: 'rgba(0, 0, 0, .6)',
    borderTopColor: 'rgba(0, 0, 0, .6)',
    borderBottomColor: 'rgba(0, 0, 0, .6)',
  },
  rectangleColor: {
    height: 250,
    width: 250,
    backgroundColor: 'transparent',
  },
  topLeft: {
    width: 50,
    height: 50,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    position: 'absolute',
    left: -1,
    top: -1,
    borderLeftColor: colors.secondary,
    borderTopColor: colors.secondary,
    borderTopLeftRadius: 20,
  },
  topRight: {
    width: 50,
    height: 50,
    borderTopWidth: 3,
    borderRightWidth: 3,
    position: 'absolute',
    right: -1,
    top: -1,
    borderRightColor: colors.secondary,
    borderTopColor: colors.secondary,
    borderTopRightRadius: 20,
  },
  bottomLeft: {
    width: 50,
    height: 50,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    position: 'absolute',
    left: -1,
    bottom: -1,
    borderLeftColor: colors.secondary,
    borderBottomColor: colors.secondary,
    borderBottomLeftRadius: 20,
  },
  bottomRight: {
    width: 50,
    height: 50,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    position: 'absolute',
    right: -1,
    bottom: -1,
    borderRightColor: colors.secondary,
    borderBottomColor: colors.secondary,
    borderBottomRightRadius: 20,
  },
});
