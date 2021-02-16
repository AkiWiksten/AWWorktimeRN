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
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

type WsProps = {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
};

const WorkTimeEditScreen: React.FC<WsProps> = (props) => {
  const [date, setDate] = useState('9:00');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [value, onChangeText] = React.useState('Useless Placeholder');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: Date) => {
    setDate(selectedDate.getHours() + ':' + selectedDate.getMinutes());
    console.warn('A date has been picked: ', selectedDate);
    hideDatePicker();
  };

  const onPressTitle = () => {
    showDatePicker();
  };

  return (
    <Fragment>
      <Text style={styles.date}>Selected Day: {props.selectedDate}</Text>
      <Text style={{textAlign: 'center'}}>
        Every field has at least a time in hours and minutes.
      </Text>
      <ScrollView
        contentContainerStyle={[styles.container, styles.childContainer]}>
        <Text style={styles.item} onPress={onPressTitle}>
          Begin Time: {date}
        </Text>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <Text style={styles.item} onPress={onPressTitle}>
          End Time: {date}
        </Text>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <Text style={styles.item} onPress={onPressTitle}>
          Daily Work Estimate: {date}
        </Text>
        <TextInput onChangeText={(text) => onChangeText(text)} value={value} />
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  flextime: {
    flexDirection: 'row',
  },
  date: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonsParent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    paddingBottom: 10,
    paddingTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10,
    elevation: 5,
    width: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  parentContainer: {
    flexDirection: 'column',
  },
  childContainer: {
    flexDirection: 'column',
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 22,
    marginBottom: 100,
    flexDirection: 'row',
  },
  item: {
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
  item1: {
    height: 120,
    fontSize: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 12,
  },
  textInput: {
    fontSize: 14,
  },
  details: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WorkTimeEditScreen;
