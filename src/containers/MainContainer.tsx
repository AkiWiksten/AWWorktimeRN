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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainContainer() {
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@selectedDateKey');
      if (value !== null) {
        // value previously stored
        console.log('getData', value);
        setDate(value);
      } else {
        var date0 = new Date();
        var date1 =
          date0.getDate() +
          '.' +
          (date0.getMonth() + 1) +
          '.' +
          date0.getFullYear();
        setDate(date1);
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const [date, setDate] = useState('');
  console.log('MainContainer: ', date);

  function getHeaderTitle(route: any) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen
    // In our case, it's "Feed" as that's the first screen inside the navigator
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Calendar';

    switch (routeName) {
      case 'Calendar':
        return 'Select which date to edit';
      case 'Work Time':
        return 'Edit work time fields';
      case 'Projects':
        return 'Projects';
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
              iconName = focused ? 'list-box' : 'list';
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
      <AppStateCheck selectedDate={date} setSelectedDate={setDate} />
    </Fragment>
  );
}

export default MainContainer;
