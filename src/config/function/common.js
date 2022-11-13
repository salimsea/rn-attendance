import {PermissionsAndroid, Platform} from 'react-native';
import Tips from 'react-native-root-tips';
import {colors} from '../../utils';
import RNFetchBlob from 'rn-fetch-blob';
import {useRef, useEffect} from 'react';

export const FUNCAngkaToRupiah = (num = 0) => {
  var numx = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return numx;
};

export const FUNCToast = (status, {...obj}) => {
  if (status === 'SUCCESS') {
    Tips.showSuccess(obj.msg, {
      duration: obj.duration === undefined ? 2000 : obj.duration,
      position: Tips.positions.CENTER,
      shadow: false,
      animation: true,
      hideOnPress: false,
      mask: true,
      maskColor: colors.black,
      delay: 0,
    });
  }
  if (status === 'FAIL') {
    Tips.showFail(obj.msg, {
      duration: 2000,
      position: Tips.positions.CENTER,
      shadow: false,
      animation: true,
      hideOnPress: false,
      mask: true,
      maskColor: colors.black,
      delay: 0,
    });
  }
  if (status === 'WARN') {
    Tips.showWarn(obj.msg, {
      duration: obj.duration === undefined ? 2000 : obj.duration,
      position: Tips.positions.CENTER,
      shadow: false,
      animation: true,
      hideOnPress: false,
      mask: true,
      maskColor: colors.black,
      delay: 0,
    });
  }
  if (status === 'INFO') {
    Tips.showInfo(obj.msg, {
      duration: obj.duration === undefined ? 2000 : obj.duration,
      position: Tips.positions.CENTER,
      shadow: false,
      animation: true,
      hideOnPress: false,
      mask: true,
      maskColor: colors.black,
      delay: 0,
    });
  }
  if (status === 'LOADING') {
    Tips.showLoading(obj.msg, {
      duration: obj.duration === undefined ? 30000 : obj.duration,
      position: Tips.positions.CENTER,
      shadow: false,
      animation: true,
      hideOnPress: false,
      mask: true,
      maskColor: colors.black,
      delay: 0,
    });
  }
  if (status === 'HIDE') {
    Tips.hide();
  }
};

export const FUNCDateToString = date => {
  var Date = date.getDate();
  var Month = date.getMonth() + 1;
  var Year = date.getFullYear();
  if (Date < 10) Date = '0' + Date;
  if (Month < 10) Month = '0' + Month;
  return Date + '-' + Month + '-' + Year;
};

export const FUNCGetExtention = fileUrl => {
  return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
};

export const FUNCGetFileName = path => {
  let filename = path.substring(path.lastIndexOf('/') + 1, path.length);
  return filename;
};

export const FUNCConvertTimeDuration = s => {
  var m = Math.floor(s / 60);
  m = m >= 10 ? m : '0' + m;
  s = Math.floor(s % 60);
  s = s >= 10 ? s : '0' + s;
  var ret = m + ':' + s;
  return ret;
};

export const FUNCCurrentDateChat = () => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var hh = today.getHours();
  var menit = today.getMinutes();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (hh < 10) {
    hh = '0' + hh;
  }
  if (menit < 10) {
    menit = '0' + menit;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  today = dd + '/' + mm + '/' + yyyy + ' ' + hh + ':' + menit;
  return today;
};

export const FUNCGetExtentionYt = fileUrl => {
  return /[/]/.exec(fileUrl) ? /[^/]+$/.exec(fileUrl) : undefined;
};

export const FUNCDownloadFile = async fileUrl => {
  try {
    FUNCToast('LOADING', {msg: 'memuat file...'});
    let date = new Date();
    let FILE_URL = fileUrl;
    let file_ext = FUNCGetExtention(FILE_URL);

    file_ext = '.' + file_ext[0];

    const {config, fs} = RNFetchBlob;
    const RootDir = (await fs.dirs.PictureDir) + `/rnosrdxclean/`;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path:
          RootDir +
          '/rnosrdxclean_file_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          file_ext,
        description: 'downloading file from rnosrdxclean...',
        notification: true,
        useDownloadManager: true,
      },
    };
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        FUNCToast('SUCCESS', {
          msg: `File Downloaded Successfully ${
            Platform.OS !== 'ios'
              ? '\n\n' + options.addAndroidDownloads.path
              : ''
          }`,
        });
      });
  } catch (e) {
    FUNCToast('WARN', {msg: `File Downloaded Error`});
  }
};

export const FUNCDownloadMultiFile = async data => {
  try {
    FUNCToast('LOADING', {msg: 'memuat file...'});
    var success = false;
    for (var i = 0; i < data.length; i++) {
      let date = new Date();
      const extention = data[i].split('.').pop();
      const {config, fs} = RNFetchBlob;
      const RootDir = (await fs.dirs.PictureDir) + `/rnosrdxclean/`;
      let options = {
        fileCache: true,
        addAndroidDownloads: {
          path:
            RootDir +
            '/rnosrdxclean_file_' +
            Math.floor(date.getTime() + date.getSeconds() / 2) +
            '.' +
            extention,
          description: 'downloading file from rnosrdxclean...',
          notification: true,
          useDownloadManager: true,
        },
      };
      await config(options)
        .fetch('GET', data[i])
        .then(res => {
          success = true;
          console.log('data[i] > ', data[i]);
        });
    }
    if (success) FUNCToast('SUCCESS', {msg: `File Downloaded Successfully`});
  } catch (e) {
    FUNCToast('WARN', {msg: `File Downloaded Error`});
  }
};

export const FUNCConvertDateDmyToYmd = date => {
  var slicedd = date.slice(0, 2);
  var slicemm = date.slice(3, 5);
  var sliceyy = date.slice(6, 10);
  return sliceyy + '-' + slicemm + '-' + slicedd;
};

export const FUNCIsImage = filename => {
  var isTrue = false;
  var extention = /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  if (extention !== undefined) {
    var realExtention = extention[0].toLowerCase();
    if (realExtention === 'jpg') isTrue = true;
    if (realExtention === 'jpeg') isTrue = true;
    if (realExtention === 'png') isTrue = true;
  }
  return isTrue;
};

export const FUNCPermissionAndroid = async type => {
  try {
    if (type === 'ACCESS_FINE_LOCATION') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'application',
          message: 'app access to your location, please accept or granted ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        FUNCToast('WARN', {msg: 'Location permission denied'});
        return false;
      }
    }
  } catch (err) {
    console.warn(err);
  }
};

export const FUNCKorCen = coord => {
  var result = coord.reduce(
    function (x, y) {
      return [x[0] + y[0] / coord.length, x[1] + y[1] / coord.length];
    },
    [0, 0],
  );
  return result;
};

export const FUNCArePointNear = (myPoint, checkPoint, km) => {
  var ky = 40000 / 360;
  var kx = Math.cos((Math.PI * checkPoint[1]) / 180.0) * ky;
  var dx = Math.abs(checkPoint[0] - myPoint[0]) * kx;
  var dy = Math.abs(checkPoint[1] - myPoint[1]) * ky;
  return Math.sqrt(dx * dx + dy * dy) <= km;
};

export const FUNCCalcCrow = (myPoint, checkPoint) => {
  var R = 6371; // km
  var dLat = toRad(checkPoint[1] - myPoint[1]);
  var dLon = toRad(checkPoint[0] - myPoint[0]);
  var lat1 = toRad(myPoint[1]);
  var lat2 = toRad(checkPoint[1]);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d * 1000;
};
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

export const FUNCZoomCam = distance => {
  if (distance >= 1234392.25) return 4;
  if (distance >= 188386.109) return 6;
  if (distance >= 78271.484) return 8;
  if (distance >= 39135.742) return 9;
  if (distance >= 19567.871) return 10;
  if (distance >= 9783.936) return 11;
  if (distance >= 4891.968) return 12;
  if (distance >= 2445.984) return 13;
  if (distance >= 1222.992) return 14;
  if (distance >= 611.496) return 15;
  if (distance >= 305.748) return 16;
  if (distance >= 152.874) return 17;
  if (distance >= 76.437) return 18;
  if (distance >= 38.218) return 19;
  if (distance >= 19.109) return 19.5;
  if (distance >= 9.555) return 20;
  if (distance >= 4.777) return 20.5;
  if (distance >= 2.777) return 21;
  if (distance >= 1.0) return 21.5;
  if (distance >= 777) return 22;
  if (distance >= 200) return 22.5;
};

export const FUNCZoomCamCustom = distance => {
  if (distance > 1234392.25) return 4;
  if (distance > 188386.109) return 6;
  if (distance > 78271.484) return 6.5;
  if (distance > 39135.742) return 7;
  if (distance > 19567.871) return 8;
  if (distance > 9783.936) return 9;
  if (distance > 4891.968) return 10;
  if (distance > 2445.984) return 13;
  if (distance > 1222.992) return 14;
  if (distance > 611.496) return 15;
  if (distance > 305.748) return 16;
  if (distance > 152.874) return 17;
  if (distance > 76.437) return 17;
  if (distance > 38.218) return 17;
  if (distance > 19.109) return 17.5;
  if (distance > 9.555) return 18;
  if (distance > 8.333) return 19;
  if (distance > 4.777) return 19.5;
  if (distance > 2.777) return 20;
  if (distance > 1.0) return 20.5;
  if (distance > 777) return 21;
  if (distance > 200) return 21.5;
};

export const FUNCSetFullName = (FirstName, MiddleName, LastName) => {
  var satu = FirstName || ' ';
  var dua = MiddleName || ' ';
  var tiga = LastName || ' ';
  return satu + ' ' + dua + ' ' + tiga;
};

export const FUNCGetMonth = month => {
  const name = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return name[month];
};

export const FUNCIsNight = hour => {
  return hour >= 17 || hour <= 6;
};

export const FUNCIsxx = hour => {
  return hour >= 13 || hour < 1;
};

export const FUNCIsAmPm = hour => {
  var hour = hour.split(':');
  hour = hour[0];
  if (FUNCIsxx(hour)) {
    return 'pm';
  } else {
    return 'am';
  }
};
