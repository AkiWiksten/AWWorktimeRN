import React from 'react';
import DateScreen from '../components/DateScreen';
import {View} from 'react-native';
import {SetStateAction, Dispatch} from 'react';
const s = require('../other/myStyles');

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
