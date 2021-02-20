import React, {useState, Dispatch, Fragment, SetStateAction} from 'react';
import {
  FlatList,
  StyleSheet,
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
    let date0 = dateFormat(selectedDate, 'h:MM');
    console.warn('handleConfirm: ', date0);
    props.setTime(date0);
    hideDatePicker();
  };

  const onPressTitle = () => {
    showDatePicker();
  };
  return (
    <Fragment>
      <TouchableHighlight
        style={styles.myDatePickerText}
        underlayColor={'#AAAAAA'}
        onPress={onPressTitle}>
        <Text style={styles.touchableText}>
          {props.timeTypeString} {props.time}
        </Text>
      </TouchableHighlight>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  myDatePickerText: {
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    backgroundColor: '#DDDDDD',
  },
  touchableText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MyDatePicker;
