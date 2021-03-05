import React, {Fragment, Dispatch, SetStateAction} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import {Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import translations from '../other/Localization';
import {UpdateCurrentWorkDay} from '../other/Database';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setBeginTime, setSelectedDate} from '../redux/workTimeApp';
var s = require('../other/myStyles');

type DsProps = {
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

const DateScreen: React.FC<DsProps> = (props) => {
  const onDateChange = (date: any) => {
    console.log('Date0: ', date);
    UpdateCurrentWorkDay(
      props.selectedDate,
      props.beginTime,
      props.endTime,
      props.dailyWorkEstimate,
      props.workTimeTotal,
    );
    setSD(date._i.day + '.' + (date._i.month + 1) + '.' + date._i.year);
    console.log('DateScreen3: ', times);
  };
  const times = useSelector((state) => state);
  const dispatch = useDispatch();
  const setSD = (date: string) => dispatch(setSelectedDate(date));
  const beginT = (begin: string) => dispatch(setBeginTime(begin));
  console.log('DateScreen0: ', times);
  //console.log('DateScreen1: ', selectedDate('2.2.2021'));
  //console.log('DateScreen2: ', beginTime);

  const setCurrentDate = () => {
    var date0 = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    let finalDate = date0 + '.' + month + '.' + year;
    return finalDate;
  };
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
