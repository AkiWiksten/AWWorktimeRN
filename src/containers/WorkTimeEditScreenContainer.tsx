import React, {Dispatch, SetStateAction, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import WorkTimeEditScreen from '../components/WorkTimeEditScreen';

type WscProps = {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
};

const WorkTimeEditScreenContainer: React.FC<WscProps> = (props) => {
  const [beginTime, setBeginTime] = useState('8:00');
  const [endTime, setEndTime] = useState('16:00');
  const [dailyWorkEstimate, setDailyWorkEstimate] = useState('7:30');
  const [workTimeTotal, setWorkTimeTotal] = useState('0:00');
  return (
    <View style={styles.parentContainer}>
      <WorkTimeEditScreen
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

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'column',
    margin: 20,
  },
});

export default WorkTimeEditScreenContainer;
