import React, {useState, Dispatch, Fragment, SetStateAction} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  NativeModules,
  TouchableOpacity,
  ScrollView,
  Picker,
  Button,
  Alert,
} from 'react-native';
import MyDatePicker from '../components/MyDatePicker';
import MyTextInput from '../components/MyTextInput';

type WsProps = {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
};

const WorkTimeEditScreen: React.FC<WsProps> = (props) => {
  const [beginTime, setBeginTime] = useState('8:00');
  const [endTime, setEndTime] = useState('16:00');
  const [dailyWorkEstimate, setDailyWorkEstimate] = useState('7:30');
  const [workTimeTotal, setWorkTimeTotal] = useState('0:00');

  const TimeEnum = Object.freeze({
    beginTime: 1,
    endTime: 2,
    dailyWorkEstimate: 3,
    workTimeTotal: 10,
  });

  return (
    <Fragment>
      <Text style={styles.date}>Selected Day: {props.selectedDate}</Text>
      <Text style={{textAlign: 'center'}}>
        Every field has at least a time in hours and minutes.
      </Text>
      <ScrollView contentContainerStyle={[styles.container]}>
        <MyDatePicker
          timeType={TimeEnum.beginTime}
          timeTypeString="Begin Time:"
          time={beginTime}
        />
        <MyDatePicker
          timeType={TimeEnum.endTime}
          timeTypeString="End Time:"
          time={endTime}
        />
        <MyTextInput
          timeType={TimeEnum.dailyWorkEstimate}
          timeTypeString="Daily Work Estimate:"
          validationText="Example 29:45"
          withMinus={false}
          time={dailyWorkEstimate}
        />
        <MyTextInput
          timeType={TimeEnum.workTimeTotal}
          timeTypeString="Work Time Total:"
          validationText="Example 29:45 or -9:45"
          withMinus={true}
          time={workTimeTotal}
        />
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  date: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 22,
    marginBottom: 100,
    flexDirection: 'column',
  },
});

export default WorkTimeEditScreen;
