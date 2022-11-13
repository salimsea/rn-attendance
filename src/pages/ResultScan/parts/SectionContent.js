import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors, fonts, fontSize} from '../../../utils';
import ItemBadgeTime from './components/ItemBadgeTime';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MapboxGL from '@rnmapbox/maps';

const SectionContent = ({data, map}) => {
  var mapref = useRef(null);
  const {dataPegawaiKehadiran, mapPresence} = useSelector(
    state => state.presenceReducer,
  );
  const [titikCenter, setTitikCenter] = useState([
    106.82278495767176, -6.572953429677959,
  ]);
  const [zoomCam, setZoomCam] = useState(16);
  return (
    <View
      style={{
        backgroundColor: colors.secondary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
        marginTop: 50,
        paddingTop: 5,
      }}>
      <Text
        style={{
          fontSize: fontSize.medium,
          fontFamily: fonts.primary[600],
          color: colors.white,
          textAlign: 'center',
        }}>
        Informasi
      </Text>
      <View
        style={{
          backgroundColor: colors.primary,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 20,
          flex: 1,
          marginTop: 5,
        }}>
        {/* JAM */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 15,
          }}>
          <ItemBadgeTime
            title="Jam Hadir"
            time={data?.absen?.jamHadir}
            icon={
              <MaterialCommunityIcon
                name="login"
                color={colors.dark}
                size={20}
              />
            }
          />
          <ItemBadgeTime
            title="Jam Keluar"
            time={data?.absen?.jamKeluar || '-'}
            icon={
              <MaterialCommunityIcon
                name="logout"
                color={colors.dark}
                size={20}
              />
            }
          />
        </View>

        {/* MAP */}
        <View
          style={{
            borderRadius: 10,
            backgroundColor: colors.white,
            padding: 15,
          }}>
          <View
            style={{
              width: '100%',
              overflow: 'hidden',
              alignSelf: 'center',
              height: hp('35%'),
              borderRadius: 10,
            }}>
            <MapboxGL.MapView
              ref={mapref}
              style={styles.map}
              scaleBarEnabled={false}
              animated
              attributionEnabled={false}
              logoEnabled={false}
              rotateEnabled={false}
              scrollEnabled={false}
              zoomEnabled={false}
              showUserLocation={true}>
              <MapboxGL.Camera
                maxZoomLevel={20}
                zoomLevel={zoomCam}
                centerCoordinate={[map?.longitude, map?.latitude]}
                animationMode="flyTo"
                animationDuration={1000}
              />
              <MapboxGL.PointAnnotation
                coordinate={[map?.longitude, map?.latitude]}>
                <View>
                  <MaterialCommunityIcon
                    name="map-marker"
                    size={35}
                    color="#FF565D"
                  />
                </View>
              </MapboxGL.PointAnnotation>
            </MapboxGL.MapView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SectionContent;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    borderRadius: 20,
  },
});
