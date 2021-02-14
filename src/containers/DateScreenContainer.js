import React from 'react';
import DateScreen from '../components/DateScreen';
import {StyleSheet, View} from 'react-native';

export default function DateScreenContainer(props) {
  return (
    <View style={styles.container}>
      <DateScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
