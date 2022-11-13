import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ItemPresence} from '../../../../components';
import ItemCheckPresence from '../../../../components/atoms/ItemCheckPresence';

const ItemStatusPresence = ({
  isTrue,
  timeIn,
  timeOut = '00:00',
  hisOut = false,
}) => {
  const [isOut, setIsOut] = useState(false);
  useEffect(() => {
    var timePresenOut = timeOut?.split(':');
    var timeCurr = new Date().getHours();
    if (timeCurr >= timePresenOut[0]) {
      setIsOut(true);
    } else {
      setIsOut(false);
    }
  }, [timeOut]);

  return (
    <>
      <ItemPresence
        timeIn={timeIn}
        timeOut={timeOut}
        hisOut={hisOut}
        isTrue={isTrue}
      />
      <ItemCheckPresence
        timeIn={timeIn}
        timeOut={timeOut}
        hisOut={hisOut}
        isTrue={isTrue}
      />
    </>
  );
};

export default ItemStatusPresence;

const styles = StyleSheet.create({});
