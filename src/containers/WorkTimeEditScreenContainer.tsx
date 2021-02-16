import React, {Dispatch, SetStateAction} from 'react';
import {View, StyleSheet} from 'react-native';
import WorkTimeEditScreen from '../components/WorkTimeEditScreen';

type WscProps = {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
};

const WorkTimeEditScreenContainer: React.FC<WscProps> = (props) => {
  return (
    <View style={styles.parentContainer}>
      <WorkTimeEditScreen {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'column',
    margin: 20,
  },
});

export default WorkTimeEditScreenContainer;
