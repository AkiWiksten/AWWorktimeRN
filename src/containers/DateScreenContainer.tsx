import React from 'react';
import DateScreen from '../components/DateScreen';
import {View} from 'react-native';
import {SetStateAction, Dispatch} from 'react';
import AppStateCheck from '../other/AppStateCheck';
const s = require('../other/myStyles');

type DscProps = {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
  beginTime: string;
  setBeginTime: Dispatch<SetStateAction<string>>;
  endTime: string;
  setEndTime: Dispatch<SetStateAction<string>>;
  dailyWorkEstimate: string;
  setDailyWorkEstimate: Dispatch<SetStateAction<string>>;
  workTimeTotal: string;
  setWorkTimeTotal: Dispatch<SetStateAction<string>>;
};

const DateScreenContainer: React.FC<DscProps> = (props) => {
  AppStateCheck(
    props.selectedDate,
    props.setSelectedDate,
    props.beginTime,
    props.setBeginTime,
    props.endTime,
    props.setEndTime,
    props.dailyWorkEstimate,
    props.setDailyWorkEstimate,
    props.workTimeTotal,
    props.setWorkTimeTotal,
  );
  return (
    <View style={s.containerDsc}>
      <DateScreen {...props} />
    </View>
  );
};

export default DateScreenContainer;
