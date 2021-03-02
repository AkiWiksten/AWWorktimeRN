import React, {
  useRef,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import {AppState, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PromiseProvider} from 'mongoose';
import {ReadCurrentWorkDay, UpdateCurrentWorkDay} from './Database';

const AppStateCheck = (
  selectedDate: string,
  setSelectedDate: Dispatch<SetStateAction<string>>,
  beginTime: string,
  setBeginTime: Dispatch<SetStateAction<string>>,
  endTime: string,
  setEndTime: Dispatch<SetStateAction<string>>,
  dailyWorkEstimate: string,
  setDailyWorkEstimate: Dispatch<SetStateAction<string>>,
  workTimeTotal: string,
  setWorkTimeTotal: Dispatch<SetStateAction<string>>,
) => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);
    console.log('useEffect');
    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, [selectedDate]);

  const _handleAppStateChange = (nextAppState: any) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
      getData();
      ReadCurrentWorkDay(
        selectedDate,
        setBeginTime,
        setEndTime,
        setDailyWorkEstimate,
        setWorkTimeTotal,
      );
    } else {
      console.log('App has gone to background!');
      UpdateCurrentWorkDay(
        selectedDate,
        beginTime,
        endTime,
        dailyWorkEstimate,
        workTimeTotal,
      );
      storeData();
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    console.log('AppState', appState.current);
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@selectedDateKey');
      if (value !== null) {
        // value previously stored
        setSelectedDate(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  const storeData = async () => {
    try {
      console.log('storeData', selectedDate);
      await AsyncStorage.setItem('@selectedDateKey', selectedDate);
    } catch (e) {
      // saving error
    }
  };
};

export default AppStateCheck;
