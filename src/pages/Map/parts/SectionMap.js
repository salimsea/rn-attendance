import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapboxGL from '@rnmapbox/maps';
import Geolocation from 'react-native-geolocation-service';
import {colors} from '../../../utils';
import {Alert} from '../../../components';
import {
  FUNCArePointNear,
  FUNCCalcCrow,
  FUNCKorCen,
  FUNCPermissionAndroid,
  FUNCZoomCam,
} from '../../../config';
import {useSelector} from 'react-redux';

const SectionMap = () => {
  var mapref = useRef(null);
  const isMounted = useRef(true);

  const {mapPresence} = useSelector(state => state.presenceReducer);

  const [titikCenter, setTitikCenter] = useState([
    106.79603210459547, -6.526692378983005,
  ]);

  const [zoomCam, setZoomCam] = useState(16);
  const [isNear, setIsNear] = useState(false);

  const [shapeLine, setShapeLine] = useState({
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: [],
    },
  });

  useEffect(() => {
    if (isMounted.current) {
      FUNCPermissionAndroid('ACCESS_FINE_LOCATION');
      Geolocation.getCurrentPosition(location => {
        onWilStart(location);
      });
      Geolocation.watchPosition(location => {
        onWilStart(location);
      });
      return () => {
        isMounted.current = false;
      };
    }
  });

  const onWilStart = async location => {
    var latlonUser = [location?.coords?.longitude, location?.coords?.latitude];
    var locationDest = [mapPresence.lon, mapPresence.lat];
    setTitikCenter(FUNCKorCen([latlonUser, locationDest]));
    setZoomCam(FUNCZoomCam(FUNCCalcCrow(latlonUser, locationDest)));
    setShapeLine({
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [latlonUser, locationDest],
      },
    });
    var isTrueLok = FUNCArePointNear(latlonUser, locationDest, 0.01);
    setTimeout(() => {
      1000;
      if (isTrueLok) {
        setIsNear(true);
      } else {
        setIsNear(false);
      }
    }, 1000);
  };
  return (
    <>
      <MapboxGL.MapView
        ref={mapref}
        style={styles.map}
        scaleBarEnabled={false}
        animated
        attributionEnabled={false}
        logoEnabled={false}
        rotateEnabled={false}
        showUserLocation={true}>
        <MapboxGL.Camera
          maxZoomLevel={20}
          zoomLevel={zoomCam}
          centerCoordinate={titikCenter}
          animationMode="flyTo"
          animationDuration={1000}
        />
        <MapboxGL.ShapeSource id="line1" shape={mapPresence.shapeCircle}>
          <MapboxGL.CircleLayer
            id="circle1"
            sourceLayerID="sf2010"
            style={styles.singlePoint}
            maxZoomLevel={23}
            minZoomLevel={17}
          />
        </MapboxGL.ShapeSource>
        {shapeLine.geometry?.coordinates?.length !== 0 && (
          <MapboxGL.ShapeSource id="line2" shape={shapeLine}>
            <MapboxGL.LineLayer id="linelayer2" style={styles.linePoint} />
          </MapboxGL.ShapeSource>
        )}
        <MapboxGL.PointAnnotation
          coordinate={[mapPresence.lon, mapPresence.lat]}>
          <View>
            <MaterialCommunityIcon
              name="map-marker"
              size={35}
              color={colors.red}
            />
          </View>
        </MapboxGL.PointAnnotation>
        <MapboxGL.UserLocation
          androidRenderMode="normal"
          visible={true}
          onUpdate={e => onWilStart(e)}
        />
      </MapboxGL.MapView>
      {/* SECTION ALERT */}
      <View style={{position: 'absolute', bottom: 20, width: '100%'}}>
        {isNear ? (
          <Alert
            icon={
              <MaterialCommunityIcon
                name="check-decagram"
                size={25}
                color={colors.white}
              />
            }
            desc="Lokasi anda berada dalam radius sekolah"
            color={colors.primary}
          />
        ) : (
          <Alert
            icon={
              <MaterialCommunityIcon
                name="close-circle"
                size={25}
                color={colors.white}
              />
            }
            desc="Lokasi anda tidak berada dalam radius sekolah"
            color={colors.red}
          />
        )}
      </View>
    </>
  );
};

export default SectionMap;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
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
});
