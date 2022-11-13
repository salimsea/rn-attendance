import {StyleSheet, View, StatusBar, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapboxGL from '@rnmapbox/maps';
import Geolocation from 'react-native-geolocation-service';
import {colors} from '../../utils';
import {
  FUNCArePointNear,
  FUNCCalcCrow,
  FUNCKorCen,
  FUNCPermissionAndroid,
  FUNCZoomCam,
} from '../../config/function/common';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Alert, Gap} from '../../components';
import {navGoback} from '../../config/helpers/navigationRef';
import SectionHeading from './parts/SectionHeading';
import SectionMap from './parts/SectionMap';

const Map = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor="transparent"
      />
      <View style={styles.page}>
        <View style={styles.content}>
          {/* SECTION MAP */}
          <SectionMap />

          {/* SECTION HEADING */}
          <SectionHeading />
        </View>
      </View>
    </>
  );
};

export default Map;
const layerStyles = {
  singlePoint: {
    circleColor: colors.secondary,
    circleOpacity: 0.3,
    circleStrokeWidth: 2,
    circleStrokeColor: 'white',
    circleRadius: 100,
  },
  linePoint: {
    lineColor: colors.primary,
    lineWidth: 5,
    lineCap: 'round',
    lineJoin: 'round',
    lineWidth: 3.2,
    lineOpacity: 0.84,
  },
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.black,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
