import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DateScreenContainer from './DateScreenContainer';
//import WorkTimeEditScreenContainer from './WorkTimeEditScreenContainer';
//import ProjectsContainer from './ProjectsScreenContainer';

const Tab = createBottomTabNavigator();
export default function MainContainer(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calendar" component={DateScreenContainer} />
      {/*<Tab.Screen name="Work time" component={WorkTimeEditScreenContainer} />
      <Tab.Screen name="Projects" component={ProjectsContainer} />*/}
    </Tab.Navigator>
  );
}
