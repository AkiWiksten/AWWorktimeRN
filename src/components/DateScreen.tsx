import React, {Fragment, Dispatch, SetStateAction} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import {Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import translations from '../other/Localization';
var s = require('../other/myStyles');

type DsProps = {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
};

const DateScreen: React.FC<DsProps> = (props) => {
  const onDateChange = (date: any) => {
    console.log('Date0: ', date);
    props.setSelectedDate(
      date._i.day + '.' + (date._i.month + 1) + '.' + date._i.year,
    );
  };
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('useFocusEffect: is focused');
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions

        console.log('useFocusEffect: is not focused');
      };
    }, []),
  );
  return (
    <Fragment>
      <View style={s.container}>
        <Text style={s.selectedDate}>
          {translations.selectedDay}
          {props.selectedDate}
        </Text>
        <CalendarPicker onDateChange={onDateChange} startFromMonday />
        <Text style={s.hours}>{translations.hours}</Text>
        <Text style={s.stats}>{translations.today}</Text>
        <Text style={s.stats}>{translations.thisWeek}</Text>
        <Text style={s.stats}>{translations.thisMonth}</Text>
      </View>
    </Fragment>
  );
};

export default DateScreen;
