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
      <Text style={styles.myDatePickerText} onPress={onPressTitle}>
        {props.timeTypeString} {props.time}
      </Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});

export default MyDatePicker;
