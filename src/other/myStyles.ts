'use strict';

import {StyleSheet} from 'react-native';

var myStyles = StyleSheet.create({
  //DateScreen
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  selectedDate: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hours: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  stats: {
    fontSize: 14,
  },
  //MyDatePicker
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
  //MyTextInput
  myTouchableText: {
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
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  //ProjectsScreen
  buttonContainer: {
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    paddingBottom: 10,
    paddingTop: 10,
    marginLeft: 20,
    marginRight: 20,
    elevation: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  date: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  /*container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 22,
    marginLeft: 10,
  },*/
  item0: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  item1: {
    paddingLeft: 10,
    backgroundColor: 'lightgreen',
    paddingTop: 10,
    paddingBottom: 10,
  },
  text0: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 0,
    paddingBottom: 0,
  },
  textInput: {
    fontSize: 16,
    marginTop: 0,
    paddingTop: 0,
    marginBottom: 0,
    paddingBottom: 0,
  },
  details: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  //WorkTimeEditScreen
  dateWtes: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  containerWtes: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 22,
    marginBottom: 100,
  },
  descText: {textAlign: 'center'},
  //DateScreenContainer
  containerDsc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  //WorkTimeEditScreenContainer
  parentContainerWtesc: {
    flexDirection: 'column',
    margin: 20,
  },
});

module.exports = myStyles;
