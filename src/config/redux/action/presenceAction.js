import {CommonActions} from '@react-navigation/native';
import {FUNCToast} from '../../function';
import {BASEURL} from '../../helpers';
import http from '../../helpers/http';

export const setDataPegawaiKehadiran = () => {
  return async dispatch => {
    await http.get(`${BASEURL}/api/Presences/GetPegawaiKehadiran`).then(res => {
      let data = res.data;
      if (data.isSuccess) {
        dispatch({type: 'DATA_PEGAWAI_KEHADIRAN', payload: data.data});
        dispatch({
          type: 'MAP_PRESENCE',
          payload: {
            isLoadApi: true,
            shapeCircle: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [
                      data.data.longitudeSekolah,
                      data.data.latitudeSekolah,
                    ],
                  },
                },
              ],
            },
            lat: data.data.latitudeSekolah,
            lon: data.data.longitudeSekolah,
          },
        });
      } else {
        FUNCToast('WARN', {msg: data.returnMessage});
      }
    });
  };
};

export const apiPegawaiCheckin = (iData, navigation) => {
  return async dispatch => {
    var fd = new FormData();
    fd.append('Latitude', iData.latitude);
    fd.append('Longitude', iData.longitude);
    await http.post(`${BASEURL}/api/Presences/PegawaiCheckin`, fd).then(res => {
      let data = res.data;
      if (data.isSuccess) {
        var PARAMMap = {
          latitude: iData.latitude,
          longitude: iData.longitude,
        };
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              {name: 'Home'},
              {name: 'ResultScan', params: {PARAMData: data.data, PARAMMap}},
            ],
          }),
        );
      } else {
        FUNCToast('WARN', {msg: data.returnMessage});
      }
    });
  };
};
