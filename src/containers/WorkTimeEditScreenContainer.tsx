import React, {Dispatch, SetStateAction, useState} from 'react';
import {View} from 'react-native';
import WorkTimeEditScreen from '../components/WorkTimeEditScreen';
const s = require('../other/myStyles');

type WscProps = {
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

const WorkTimeEditScreenContainer: React.FC<WscProps> = (props) => {
  return (
    <View style={s.parentContainerWtesc}>
      <WorkTimeEditScreen
        selectedDate={props.selectedDate}
        setSelectedDate={props.setSelectedDate}
        beginTime={props.beginTime}
        setBeginTime={props.setBeginTime}
        endTime={props.endTime}
        setEndTime={props.setEndTime}
        dailyWorkEstimate={props.dailyWorkEstimate}
        setDailyWorkEstimate={props.setDailyWorkEstimate}
        workTimeTotal={props.workTimeTotal}
        setWorkTimeTotal={props.setWorkTimeTotal}
      />
    </View>
  );
};

export default WorkTimeEditScreenContainer;
