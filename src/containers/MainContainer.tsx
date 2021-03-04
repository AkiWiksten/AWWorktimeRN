import React, {useState, Fragment, useEffect, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import DateScreenContainer from './DateScreenContainer';
import WorkTimeEditScreenContainer from './WorkTimeEditScreenContainer';
import ProjectsScreenContainer from './ProjectsScreenContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStateCheck from '../other/AppStateCheck';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import translations from '../other/Localization';
import {
  InitDatabase,
  ReadCurrentWorkDay,
  UpdateCurrentWorkDay,
} from '../other/Database';
import {AppState} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainContainer() {
  const [date, setDate] = useState('');
  const [beginTime, setBeginTime] = useState('8:00');
  const [endTime, setEndTime] = useState('16:00');
  const [dailyWorkEstimate, setDailyWorkEstimate] = useState('7:30');
  const [workTimeTotal, setWorkTimeTotal] = useState('0:00');
  console.log('date: ', date);

  useEffect(() => {
    getData();
    
  }, []);

  const setCurrentDate = () => {
    var date0 = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    let finalDate = date0 + '.' + month + '.' + year;
    if (date === '') {
      setDate(finalDate);
    }
  };

  function getHeaderTitle(route: any) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen
    // In our case, it's "Feed" as that's the first screen inside the navigator
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Calendar';

    switch (routeName) {
      case 'Calendar':
        return translations.whichDate;
      case 'Work Time':
        return translations.workTime;
      case 'Projects':
        return translations.selectProjects;
    }
  }

  function HomeTabs() {
    console.log('HomeTabs:', beginTime);
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Calendar') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Work Time') {
              iconName = focused ? 'time' : 'time-outline';
            } else if (route.name === 'Projects') {
              iconName = focused ? 'list' : 'list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          labelStyle: {fontSize: 20},
        }}>
        <Tab.Screen
          name="Calendar"
          children={() => (
            <DateScreenContainer
              selectedDate={date}
              setSelectedDate={setDate}
              beginTime={beginTime}
              setBeginTime={setBeginTime}
              endTime={endTime}
              setEndTime={setEndTime}
              dailyWorkEstimate={dailyWorkEstimate}
              setDailyWorkEstimate={setDailyWorkEstimate}
              workTimeTotal={workTimeTotal}
              setWorkTimeTotal={setWorkTimeTotal}
            />
          )}
        />
        <Tab.Screen
          name="Work Time"
          children={() => (
            <WorkTimeEditScreenContainer
              selectedDate={date}
              setSelectedDate={setDate}
              beginTime={beginTime}
              setBeginTime={setBeginTime}
              endTime={endTime}
              setEndTime={setEndTime}
              dailyWorkEstimate={dailyWorkEstimate}
              setDailyWorkEstimate={setDailyWorkEstimate}
              workTimeTotal={workTimeTotal}
              setWorkTimeTotal={setWorkTimeTotal}
            />
          )}
        />
        <Tab.Screen
          name="Projects"
          children={() => (
            <ProjectsScreenContainer
              selectedDate={date}
              setSelectedDate={setDate}
            />
          )}
        />
      </Tab.Navigator>
    );
  }

  InitDatabase();
  /*const appState = useRef(AppState.currentState);
  const count = useRef(0);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  useEffect(() => {
    console.log('MainContainer66: ', count.current);
    AppState.addEventListener('change', _handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  });

  const _handleAppStateChange = (nextAppState: any) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!:', appState.current);
      getData();
      ReadCurrentWorkDay(
        date,
        setDate,
        beginTime,
        setBeginTime,
        endTime,
        setEndTime,
        dailyWorkEstimate,
        setDailyWorkEstimate,
        workTimeTotal,
        setWorkTimeTotal,
      );
    } else {
      console.log('App has gone to background!2:', count.current);
      if (count.current > 0) {
        console.log('App has gone to background!0:', appState.current);
        UpdateCurrentWorkDay(
          date,
          beginTime,
          endTime,
          dailyWorkEstimate,
          workTimeTotal,
        );
        storeData();
      } else {
        console.log('App has gone to background!1:', appState.current);
        count.current++;
      }
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  };*/

  const getData = async () => {
    console.log('getData', date);
    try {
      const value = await AsyncStorage.getItem('@selectedDateKey');
      if (value !== null) {
        // value previously stored
        setDate(value);
        ReadCurrentWorkDay(
          date,
          setDate,
          beginTime,
          setBeginTime,
          endTime,
          setEndTime,
          dailyWorkEstimate,
          setDailyWorkEstimate,
          workTimeTotal,
          setWorkTimeTotal,
        );
      } else {
        setCurrentDate();
      }
    } catch (e) {
      // error reading value
    }
  };

  const storeData = async () => {
    try {
      console.log('storeData', date);
      await AsyncStorage.setItem('@selectedDateKey', date);
    } catch (e) {
      // saving error
    }
  };

  return (
    <Fragment>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
      </Stack.Navigator>
    </Fragment>
  );
}

export default MainContainer;
