import React, {Dispatch, SetStateAction} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

type MtiProps = {
  timeType: Object;
  timeTypeString: string;
  validationText: string;
  withMinus: boolean;
  time: string;
  setTime: Dispatch<SetStateAction<string>>;
};

const MyTextInput: React.FC<MtiProps> = (props) => {
  const {control, handleSubmit, errors} = useForm();
  console.log('errors', errors);
  console.log('MyTextInput', props);
  const onSubmit = (d: any) => {
    console.log('onSubmit:', d);
    props.setTime(d);
  };
  const onPressTitle = () => {
    
  };
  return (
    <TouchableHighlight
      style={styles.myDatePickerText}
      underlayColor={'#AAAAAA'}
      onPress={onPressTitle}>
      <View style={styles.myTextInputView}>
        <Text style={styles.myTextInputText}>{props.timeTypeString}</Text>
        <View>
          <Controller
            control={control}
            render={({onChange, value}) => (
              <TextInput
                autoFocus={true}
                style={styles.myTextInput}
                onBlur={handleSubmit(onSubmit)}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Time"
              />
            )}
            name="dweName"
            rules={{
              pattern: props.withMinus
                ? /[-]?[0-9]+:[0-5][0-9]$/
                : /[0-9]+:[0-5][0-9]$/,
            }}
            defaultValue={props.time}
          />
          {errors.dweName && (
            <Text style={styles.validationText}>{props.validationText}</Text>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  myDatePickerText: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    backgroundColor: '#DDDDDD',
  },
  validationText: {
    color: 'red',
  },
  myTextInputView: {
    fontSize: 18,
    fontWeight: 'bold',
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
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
});

export default MyTextInput;
