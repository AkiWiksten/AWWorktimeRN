import React, {Dispatch, SetStateAction, useState} from 'react';
import {View} from 'react-native';
import WorkTimeEditScreen from '../components/WorkTimeEditScreen';
import {UpdateCurrentWorkDay} from '../other/Database';
const s = require('../other/myStyles');

type WscProps = {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
};

const WorkTimeEditScreenContainer: React.FC<WscProps> = (props) => {
  const [beginTime, setBeginTime] = useState('8:00');
  const [endTime, setEndTime] = useState('16:00');
  const [dailyWorkEstimate, setDailyWorkEstimate] = useState('7:30');
  const [workTimeTotal, setWorkTimeTotal] = useState('0:00');
  const screenUnfocused = () => {
    UpdateCurrentWorkDay(beginTime, endTime, dailyWorkEstimate, workTimeTotal);
  };
  const screenFocused = () => {
    ReadCurrentWorkDay(
      setBeginTime,
      setEndTime,
      setDailyWorkEstimate,
      setWorkTimeTotal,
    );
  };
  return (
    <View style={s.parentContainerWtesc}>
      <WorkTimeEditScreen
        screenFocused={screenFocused}
        screenUnfocused={screenUnfocused}
        beginTime={beginTime}
        setBeginTime={setBeginTime}
        endTime={endTime}
        setEndTime={setEndTime}
        dailyWorkEstimate={dailyWorkEstimate}
        setDailyWorkEstimate={setDailyWorkEstimate}
        workTimeTotal={workTimeTotal}
        setWorkTimeTotal={setWorkTimeTotal}
        {...props}
      />
    </View>
  );
};

export default WorkTimeEditScreenContainer;
