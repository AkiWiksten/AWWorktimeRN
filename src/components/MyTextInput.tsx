import React, {Dispatch, SetStateAction} from 'react';
import {
  
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import translations from '../other/Localization';
const s = require('../other/myStyles');

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
  const onPressTitle = () => {};
  return (
    <TouchableHighlight
      style={s.myTouchableText}
      underlayColor={'#AAAAAA'}
      onPress={onPressTitle}>
      <View style={s.myTextInputView}>
        <Text style={s.myTextInputText}>{props.timeTypeString}</Text>
        <View>
          <Controller
            control={control}
            render={({onChange, value}) => (
              <TextInput
                autoFocus={true}
                style={s.myTextInput}
                onBlur={handleSubmit(onSubmit)}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder={translations.time}
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
            <Text style={s.validationText}>{props.validationText}</Text>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default MyTextInput;
