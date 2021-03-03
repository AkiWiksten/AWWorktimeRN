import React, {
  useRef,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  useLayoutEffect,
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
  const updateState = useRef(false);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [updated, setUpdated] = useState(updateState.current);
  useEffect(() => {
    /*console.log('useLayoutEffect0: ', firstUpdate.current);
    if (firstUpdate.current) {
      firstUpdate.current = false;
      console.log('useLayoutEffect1: ', firstUpdate.current);
      return;
    }
    console.log('useLayoutEffect2: ', firstUpdate.current);*/
    AppState.addEventListener('change', _handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState: any) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!:', appState.current);
      getData();
      ReadCurrentWorkDay(
        selectedDate,
        setSelectedDate,
        beginTime,
        setBeginTime,
        endTime,
        setEndTime,
        dailyWorkEstimate,
        setDailyWorkEstimate,
        workTimeTotal,
        setWorkTimeTotal,
      );
    } else if (
      appState.current.match(/active/) &&
      nextAppState === ('background' || 'inactive')
    ) {
      if (!updated) {
        console.log('App has gone to background!0:', updateState.current);
        setUpdated(true);
      } else {
        console.log('App has gone to background!1:', updateState.current);
        UpdateCurrentWorkDay(
          selectedDate,
          beginTime,
          endTime,
          dailyWorkEstimate,
          workTimeTotal,
        );
        storeData();
      }
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
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
