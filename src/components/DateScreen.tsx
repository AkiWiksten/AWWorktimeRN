import React, {Fragment, Dispatch, SetStateAction} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import {StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

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
      <View style={styles.container}>
        <Text style={styles.selectedDate}>
          Selected Day: {props.selectedDate}
        </Text>
        <CalendarPicker onDateChange={onDateChange} startFromMonday />
        <Text style={styles.hours}>HOURS</Text>
        <Text style={styles.stats}>Today: </Text>
        <Text style={styles.stats}>This week: </Text>
        <Text style={styles.stats}>This month: </Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  selectedDate: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hours: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  stats: {
    fontSize: 14,
  },
});

export default DateScreen;
