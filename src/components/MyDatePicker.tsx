import React, {useState, Dispatch, Fragment, SetStateAction} from 'react';
import {
  FlatList,
  
  Text,
  View,
  TextInput,
  NativeModules,
  TouchableOpacity,
  ScrollView,
  Picker,
  Button,
  Alert,
} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
var dateFormat = require('dateformat');
var s = require('../other/myStyles');

type MdpProps = {
  timeType: Object;
  timeTypeString: string;
  time: string;
  setTime: Dispatch<SetStateAction<string>>;
};

const MyDatePicker: React.FC<MdpProps> = (props) => {
  const [date, setDate] = useState('9:00');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: Date) => {
    hideDatePicker();
    let date0 = dateFormat(selectedDate, 'HH:MM');
    console.log('handleConfirm: ', date0);
    props.setTime(date0);
  };

  const onPressTitle = () => {
    showDatePicker();
  };
  return (
    <Fragment>
      <TouchableHighlight
        style={s.myDatePickerText}
        underlayColor={'#AAAAAA'}
        onPress={onPressTitle}>
        <Text style={s.touchableText}>
          {props.timeTypeString} {props.time}
        </Text>
      </TouchableHighlight>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        is24Hour={true}
      />
    </Fragment>
  );
};

export default MyDatePicker;
