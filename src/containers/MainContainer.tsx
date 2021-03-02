import React, {useState, Fragment, useEffect} from 'react';
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
import {InitDatabase} from '../other/Database';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainContainer() {
  const [date, setDate] = useState('');
  const [beginTime, setBeginTime] = useState('8:00');
  const [endTime, setEndTime] = useState('16:00');
  const [dailyWorkEstimate, setDailyWorkEstimate] = useState('7:30');
  const [workTimeTotal, setWorkTimeTotal] = useState('0:00');
  console.log('MainContainer: ', date);

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
  AppStateCheck(
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
