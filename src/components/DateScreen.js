import React, {Fragment} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import {FlatList, StyleSheet, Text, View, TextInput} from 'react-native';

/*<Stack.Screen
  name="Date"
  component={DateScreen}
  options={{title: 'My profile'}}
/>;*/

function onDateChange(date) {
  console.log('Date0: ', date);
  /*this.props.setDate(
    date._i.day + '.' + (date._i.month + 1) + '.' + date._i.year,
  );*/
  this.setState({
    selectedStartDate: date,
  });
}

const DateScreen = (props) => {
  var date = new Date();
  var date1 =
    date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
  //this.props.setDate(date1);
  this.state = {
    selectedStartDate: date1,
  };
  const {selectedStartDate} = this.state;
  const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.selectedDate}>Selected Day: {date1}</Text>
        <CalendarPicker onDateChange={this.onDateChange} startFromMonday />
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
