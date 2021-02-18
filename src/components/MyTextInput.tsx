import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
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
  return (
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
  );
};

const styles = StyleSheet.create({
  validationText: {
    color: 'red',
  },
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
});

export default MyTextInput;