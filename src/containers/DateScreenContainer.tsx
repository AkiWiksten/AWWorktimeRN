import React from 'react';
import DateScreen from '../components/DateScreen';
import {View} from 'react-native';
import {SetStateAction, Dispatch} from 'react';
const s = require('../other/myStyles');

/*constructor(props) {
  super(props);
  var date=new Date();
  var date1=date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
  this.props.setDate(date1)
  this.state = {
    selectedStartDate: date1,
  };
  this.onDateChange = this.onDateChange.bind(this);
}

static navigationOptions = {
  title: 'Select Date',
};

onDateChange(date) {
  console.log("Date0: ", date)
  this.props.setDate(date._i.day + "." + (date._i.month + 1) + "." + date._i.year)
  this.setState({
    selectedStartDate: date,
  });
}*/
type DscProps = {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
};

const DateScreenContainer: React.FC<DscProps> = (props) => {
  return (
    <View style={s.containerDsc}>
      <DateScreen {...props} />
    </View>
  );
};

export default DateScreenContainer;
