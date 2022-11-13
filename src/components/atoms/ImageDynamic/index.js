import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {IMGUser} from '../../../assets';

const ImageDynamic = ({src = null}) => {
  const [isImgError, setIsImgError] = useState(false);
  return (
    <Image
      source={
        isImgError
          ? IMGUser
          : src
          ? {
              uri: src,
            }
          : IMGUser
      }
      style={styles.img}
      onError={e => setIsImgError(true)}
    />
  );
};

export default ImageDynamic;

const styles = StyleSheet.create({
  img: {
    width: undefined,
    height: undefined,
    flex: 1,
    borderRadius: 100,
    resizeMode: 'cover',
  },
});
