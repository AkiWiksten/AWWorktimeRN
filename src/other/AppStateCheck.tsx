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

type AscProps = {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
};

const AppStateCheck: React.FC<AscProps> = (props) => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);
    console.log('useEffect');
    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, [props.selectedDate]);

  const _handleAppStateChange = (nextAppState: any) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
      getData();
    } else {
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
        props.setSelectedDate(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  const storeData = async () => {
    try {
      console.log('storeData', props.selectedDate);
      await AsyncStorage.setItem('@selectedDateKey', props.selectedDate);
    } catch (e) {
      // saving error
    }
  };
  return <View />;
};

export default AppStateCheck;
