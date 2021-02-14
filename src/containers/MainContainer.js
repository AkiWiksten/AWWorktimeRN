import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DateScreenContainer from './DateScreenContainer';
import WorkTimeEditScreenContainer from './WorkTimeEditScreenContainer';
import ProjectsContainer from './ProjectsScreenContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function MainContainer(props) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
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
      <Tab.Screen name="Calendar" component={DateScreenContainer} />
      <Tab.Screen name="Work time" component={WorkTimeEditScreenContainer} />
      <Tab.Screen name="Projects" component={ProjectsContainer} />
    </Tab.Navigator>
  );
}

