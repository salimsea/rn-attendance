import {
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {Gap} from '../../../components';
import {colors, fonts, fontSize} from '../../../utils';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {navNavigate} from '../../../config/helpers/navigationRef';
import MapboxGL from '@rnmapbox/maps';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import {
  FUNCCalcCrow,
  FUNCIsAmPm,
  FUNCKorCen,
  FUNCPermissionAndroid,
  FUNCZoomCamCustom,
} from '../../../config/function/common';
import {KEY_MAPBOX} from '../../../config';
import ItemMenu from './components/ItemMenu';
import {useSelector} from 'react-redux';
import ItemStatusPresence from './components/ItemStatusPresence';
import ItemBadgeShift from './components/ItemBadgeShift';

const SectionMenu = () => {
  var mapref = useRef(null);
  const isMounted = useRef(true);
  const [titikCenter, setTitikCenter] = useState([
    106.82278495767176, -6.572953429677959,
  ]);
  const [locName, setLocName] = useState(null);
  const [zoomCam, setZoomCam] = useState(16);

  const {dataPegawaiKehadiran, mapPresence} = useSelector(
    state => state.presenceReducer,
  );

  useEffect(() => {
    if (isMounted.current) {
      FUNCPermissionAndroid('ACCESS_FINE_LOCATION');
      Geolocation.getCurrentPosition(location => {
        onWilStart(location);
      });
      return () => {
        isMounted.current = false;
      };
    }
  }, [dataPegawaiKehadiran]);

  const btnDirection = (startLoc, destLoc, isRun = false) => {
    var URL = `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${startLoc[0]},${startLoc[1]};${destLoc[0]},${destLoc[1]}?annotations=maxspeed&overview=full&geometries=geojson&access_token=${KEY_MAPBOX}`;
    axios.get(URL).then(res => {
      let data = res.data;
      setLocName(data?.waypoints[0]?.name);
      if (!isRun) setTitikCenter(FUNCKorCen([startLoc, destLoc]));
      if (isRun) setTitikCenter(startLoc);
      setZoomCam(FUNCZoomCamCustom(FUNCCalcCrow(startLoc, destLoc)));
    });
  };

  const onWilStart = async location => {
    var locationUser = [
      location?.coords?.longitude,
      location?.coords?.latitude,
    ];
    var locationDest = [mapPresence.lon, mapPresence.lat];
    btnDirection(locationUser, locationDest);
  };

  return (
    <View style={{paddingHorizontal: 0}}>
      <Gap height={30} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginHorizontal: 10}}>
          {/* MENUS */}
          <View
            style={{
              backgroundColor: colors.white,
              padding: 15,
              borderRadius: 10,
              marginHorizontal: 10,
            }}>
            {/* UP */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: 10,
                borderBottomWidth: 0.8,
                borderBottomColor: colors.grey2,
                marginBottom: 10,
              }}>
              <ItemBadgeShift timeIn={dataPegawaiKehadiran?.jadwalHadir} />
              {/* <ItemBadgeShift timeIn={'05:00'} /> */}
              <View
                style={{
                  marginLeft: 10,
                  marginTop: Platform.OS == 'android' ? 5 : 0,
                }}>
                <Text
                  style={{
                    fontSize: fontSize.xlarge,
                    fontFamily: fonts.primary[700],
                    color: colors.dark,
                  }}>
                  {dataPegawaiKehadiran?.jadwalHadir || '00:00'}
                  <Text
                    style={{
                      fontSize: fontSize.medium,
                      fontFamily: fonts.primary[600],
                      color: colors.dark,
                    }}>
                    {' '}
                    {FUNCIsAmPm(dataPegawaiKehadiran?.jadwalHadir || '00:00')}
                  </Text>
                  {''} - {dataPegawaiKehadiran?.jadwalKeluar || '00:00'}
                  <Text
                    style={{
                      fontSize: fontSize.medium,
                      fontFamily: fonts.primary[600],
                      color: colors.dark,
                    }}>
                    {' '}
                    {FUNCIsAmPm(dataPegawaiKehadiran?.jadwalKeluar || '00:00')}
                  </Text>
                </Text>
              </View>
            </View>
            {/* DOWN */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 10,
                  paddingRight: 20,
                  borderRightWidth: 0.8,
                  borderRightColor: colors.grey2,
                  marginRight: 10,
                }}>
                <ItemMenu
                  icon={
                    <MaterialCommunityIcon
                      name="qrcode"
                      size={30}
                      color={colors.white}
                    />
                  }
                  name="Scan"
                  onPress={() => navNavigate('Scan')}
                />
                <ItemMenu
                  icon={
                    <MaterialCommunityIcon
                      name="calendar-today"
                      size={30}
                      color={colors.white}
                    />
                  }
                  name="Riwayat"
                  onPress={() => navNavigate('History')}
                />
              </View>
              <View style={{marginLeft: 10}}>
                <Text
                  style={{
                    fontSize: fontSize.small,
                    fontFamily: fonts.primary[400],
                    color: colors.dark,
                  }}>
                  Status :
                </Text>
                <ItemStatusPresence
                  timeIn={dataPegawaiKehadiran?.jadwalKeluar}
                  timeOut={dataPegawaiKehadiran?.jadwalKeluar}
                  hisOut={dataPegawaiKehadiran?.absen?.jamKeluar}
                  isTrue={dataPegawaiKehadiran?.isAbsen}
                />
              </View>
            </View>
          </View>

          {/* MAP */}
          <View
            style={{
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>
            <View
              style={{
                paddingHorizontal: 15,
                paddingVertical: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: fontSize.medium,
                  fontFamily: fonts.primary[600],
                  color: colors.white,
                }}>
                Lokasi
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: fontSize.small,
                  fontFamily: fonts.primary[400],
                  color: colors.white,
                  maxWidth: 300,
                }}>
                {locName}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: colors.white,
                padding: 15,
                borderRadius: 10,
              }}>
              <TouchableOpacity
                onPress={() => navNavigate('Map')}
                style={{
                  width: 300,
                  height: 120,
                  borderRadius: 10,
                  overflow: 'hidden',
                  alignSelf: 'center',
                }}>
                {mapPresence.isLoadApi && (
                  <MapboxGL.MapView
                    ref={mapref}
                    style={styles.map}
                    scaleBarEnabled={false}
                    animated
                    attributionEnabled={false}
                    logoEnabled={false}
                    rotateEnabled={false}
                    scrollEnabled={false}
                    showUserLocation={true}>
                    <MapboxGL.Camera
                      maxZoomLevel={20}
                      zoomLevel={zoomCam}
                      centerCoordinate={titikCenter}
                      animationMode="none"
                      animationDuration={0}
                    />
                    <MapboxGL.ShapeSource
                      id="line1"
                      shape={mapPresence.shapeCircle}>
                      <MapboxGL.CircleLayer
                        id="circle1"
                        sourceLayerID="sf2010"
                        style={layerStyles.singlePoint}
                        maxZoomLevel={23}
                        minZoomLevel={20}
                      />
                    </MapboxGL.ShapeSource>
                    <MapboxGL.PointAnnotation
                      coordinate={[mapPresence.lon, mapPresence.lat]}>
                      <View>
                        <MaterialCommunityIcon
                          name="map-marker"
                          size={35}
                          color="#FF565D"
                        />
                      </View>
                    </MapboxGL.PointAnnotation>
                    <MapboxGL.UserLocation
                      androidRenderMode="gps"
                      visible={true}
                      onUpdate={location => onWilStart(location)}
                    />
                  </MapboxGL.MapView>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SectionMenu;

const layerStyles = {
  singlePoint: {
    circleColor: colors.secondary,
    circleOpacity: 0.3,
    circleStrokeWidth: 2,
    circleStrokeColor: 'white',
    circleRadius: 100,
  },
};
const styles = StyleSheet.create({
  map: {
    flex: 1,
    borderRadius: 20,
  },
});
