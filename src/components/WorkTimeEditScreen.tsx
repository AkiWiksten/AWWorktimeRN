import { useFocusEffect } from '@react-navigation/native';
import React, {useState, Dispatch, Fragment, SetStateAction} from 'react';
import {
  FlatList,
  
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
import translations from '../other/Localization';
const s = require('../other/myStyles');

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
  screenUnfocused: Function;
  screenFocused: Function;
};

const WorkTimeEditScreen: React.FC<WsProps> = (props) => {
  const TimeEnum = Object.freeze({
    beginTime: 1,
    endTime: 2,
    dailyWorkEstimate: 3,
    workTimeTotal: 10,
  });
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('useFocusEffect: WorkTimeEditScreen is focused');
      props.screenFocused();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        props.screenUnfocused();
        console.log('useFocusEffect: WorkTimeEditScreen is not focused');
      };
    }, []),
  );
  console.log('WorkTimeEditScreen', props.workTimeTotal);
  return (
    <Fragment>
      <Text style={s.dateWtes}>
        {translations.selectedDay} {props.selectedDate}
      </Text>
      <Text style={s.descText}>{translations.everyField}</Text>
      <View style={[s.containerWtes]}>
        <ScrollView>
          <MyDatePicker
            timeType={TimeEnum.beginTime}
            timeTypeString={translations.beginTime}
            time={props.beginTime}
            setTime={props.setBeginTime}
          />
          <MyDatePicker
            timeType={TimeEnum.endTime}
            timeTypeString={translations.endTime}
            time={props.endTime}
            setTime={props.setEndTime}
          />
          <MyTextInput
            timeType={TimeEnum.dailyWorkEstimate}
            timeTypeString={translations.dailyWorkEstimate}
            validationText={translations.eaxamplePlus}
            withMinus={false}
            time={props.dailyWorkEstimate}
            setTime={props.setDailyWorkEstimate}
          />
          <MyTextInput
            timeType={TimeEnum.workTimeTotal}
            timeTypeString={translations.workTimeTotal}
            validationText={translations.eaxamplePlusMinus}
            withMinus={true}
            time={props.workTimeTotal}
            setTime={props.setWorkTimeTotal}
          />
        </ScrollView>
      </View>
    </Fragment>
  );
};

export default WorkTimeEditScreen;
