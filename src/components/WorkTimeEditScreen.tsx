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
import {useForm, Controller} from 'react-hook-form';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

type WsProps = {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
};

const WorkTimeEditScreen: React.FC<WsProps> = (props) => {
  const [date, setDate] = useState('9:00');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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

  const TimeEnum = Object.freeze({
    beginTime: 1,
    endTime: 2,
    dailyWorkEstimate: 3,
  });

  const MyDatePicker = (props) => {
    return (
      <Fragment>
        <Text style={styles.myDatePickerText} onPress={onPressTitle}>
          Begin Time: {date}
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

  const MyTextInput = (props) => {
    const {control, handleSubmit, errors} = useForm();
    console.log('errors', errors);
    const onSubmit = (d) => Alert.alert('Form Data', JSON.stringify(d));
    return (
      <View style={styles.myTextInputView}>
        <Text style={styles.myTextInputText}>Daily Work Estimate:</Text>
        <View>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <TextInput
                autoFocus={true}
                style={styles.myTextInput}
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Time"
                onSubmitEditing={handleSubmit(onSubmit)}
              />
            )}
            name="dweName"
            rules={{
              required: true,
              minLength: 1,
              pattern: /^(10|11|12|[1-9]):[0-5][0-9]$/,
            }}
            defaultValue=""
          />
          {errors.dweName && <Text>Estimate is required.</Text>}
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    );
  };
  return (
    <Fragment>
      <Text style={styles.date}>Selected Day: {props.selectedDate}</Text>
      <Text style={{textAlign: 'center'}}>
        Every field has at least a time in hours and minutes.
      </Text>
      <ScrollView contentContainerStyle={[styles.container]}>
        <MyDatePicker time={TimeEnum.beginTime} />
        <MyDatePicker time={TimeEnum.endTime} />
        <MyTextInput time={TimeEnum.dailyWorkEstimate} />
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  myTextInputView: {
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  myTextInput: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  myTextInputText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    height: '100%',
    padding: 10,
  },
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
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 22,
    marginBottom: 100,
    flexDirection: 'column',
  },
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
  details: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WorkTimeEditScreen;
