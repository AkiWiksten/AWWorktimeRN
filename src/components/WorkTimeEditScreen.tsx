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
  beginTime: string;
  setBeginTime: Dispatch<SetStateAction<string>>;
  endTime: string;
  setEndTime: Dispatch<SetStateAction<string>>;
  dailyWorkEstimate: string;
  setDailyWorkEstimate: Dispatch<SetStateAction<string>>;
  workTimeTotal: string;
  setWorkTimeTotal: Dispatch<SetStateAction<string>>;
};

const WorkTimeEditScreen: React.FC<WsProps> = (props) => {
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
      <View style={[styles.container]}>
        <ScrollView>
          <MyDatePicker
            timeType={TimeEnum.beginTime}
            timeTypeString="Begin Time:"
            time={props.beginTime}
            setTime={props.setBeginTime}
          />
          <MyDatePicker
            timeType={TimeEnum.endTime}
            timeTypeString="End Time:"
            time={props.endTime}
            setTime={props.setEndTime}
          />
          <MyTextInput
            timeType={TimeEnum.dailyWorkEstimate}
            timeTypeString="Daily Work Estimate:"
            validationText="Example 29:45"
            withMinus={false}
            time={props.dailyWorkEstimate}
            setTime={props.setDailyWorkEstimate}
          />
          <MyTextInput
            timeType={TimeEnum.workTimeTotal}
            timeTypeString="Work Time Total:"
            validationText="Example 29:45 or -9:45"
            withMinus={true}
            time={props.workTimeTotal}
            setTime={props.setWorkTimeTotal}
          />
        </ScrollView>
      </View>
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
    alignItems: 'center',
    paddingTop: 22,
    marginBottom: 100,
  },
});

export default WorkTimeEditScreen;
