import React, {Component} from 'react';
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
} from 'react-native';
import TimePicker from 'react-native-simple-time-picker';
import Spinner from 'react-native-number-spinner';

const WorkTimeEditScreen = (props) => {
  var date = new Date();
  var date1 =
    date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
  //this.props.setDate(date1);
  this.state = {
    selectedStartDate: date1,
  };
  const {selectedStartDate} = this.state;
  const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  console.log('worktimeeditscreen render: ', this.state.beginTimeH);
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.date}>Selected Day: {this.props.date}</Text>
      <Text style={{textAlign: 'center'}}>
        Every field has at least a time in hours and minutes.
      </Text>
      {/*<View style={styles.container}>
        <ScrollView style={styles.childContainer}>
          <View style={styles.item}>
            <Text style={styles.text0}>Begin Time:</Text>
            {this.addRow(
              this.state.beginTimeH,
              this.state.beginTimeM,
              (beginTimeH) => this.setState({beginTimeH: Number(beginTimeH)}),
              (beginTimeM) => this.setState({beginTimeM: Number(beginTimeM)}),
            )}
          </View>
          <View style={styles.item}>
            <Text style={styles.text0}>End Time:</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(endTimeH) =>
                  this.setState({endTimeH: Number(endTimeH)})
                }
                value={'' + this.state.endTimeH}
              />
              <Text style={styles.text1}>h:</Text>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(endTimeM) =>
                  this.setState({endTimeM: Number(endTimeM)})
                }
                value={'' + this.state.endTimeM}
              />
              <Text style={styles.text1}>min</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Text style={styles.text0}>Daily Work Estimate:</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(dailyWorkEstimateH) =>
                  this.setState({
                    dailyWorkEstimateH: Number(dailyWorkEstimateH),
                  })
                }
                value={'' + this.state.dailyWorkEstimateH}
              />
              <Text style={styles.text1}>h:</Text>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(dailyWorkEstimateM) =>
                  this.setState({
                    dailyWorkEstimateM: Number(dailyWorkEstimateM),
                  })
                }
                value={'' + this.state.dailyWorkEstimateM}
              />
              <Text style={styles.text1}>min</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Text style={styles.text0}>Lunch Break Begin:</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(lunchBreakBeginH) =>
                  this.setState({lunchBreakBeginH: Number(lunchBreakBeginH)})
                }
                value={'' + this.state.lunchBreakBeginH}
              />
              <Text style={styles.text1}>h:</Text>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(lunchBreakBeginM) =>
                  this.setState({lunchBreakBeginM: Number(lunchBreakBeginM)})
                }
                value={'' + this.state.lunchBreakBeginM}
              />
              <Text style={styles.text1}>min</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Text style={styles.text0}>Lunch Break End:</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(lunchBreakEndH) =>
                  this.setState({lunchBreakEndH: Number(lunchBreakEndH)})
                }
                value={'' + this.state.lunchBreakEndH}
              />
              <Text style={styles.text1}>h:</Text>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(lunchBreakEndM) =>
                  this.setState({lunchBreakEndM: Number(lunchBreakEndM)})
                }
                value={'' + this.state.lunchBreakEndM}
              />
              <Text style={styles.text1}>min</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Text style={styles.text0}>Lunch Break Estimate:</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(lunchBreakEstimateH) =>
                  this.setState({
                    lunchBreakEstimateH: Number(lunchBreakEstimateH),
                  })
                }
                value={'' + this.state.lunchBreakEstimateH}
              />
              <Text style={styles.text1}>h:</Text>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(lunchBreakEstimateM) =>
                  this.setState({
                    lunchBreakEstimateM: Number(lunchBreakEstimateM),
                  })
                }
                value={'' + this.state.lunchBreakEstimateM}
              />
              <Text style={styles.text1}>min</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Text style={styles.text0}>Break Begin:</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(breakBeginH) =>
                  this.setState({breakBeginH: Number(breakBeginH)})
                }
                value={'' + this.state.breakBeginH}
              />
              <Text style={styles.text1}>h:</Text>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(breakBeginM) =>
                  this.setState({breakBeginM: Number(breakBeginM)})
                }
                value={'' + this.state.breakBeginM}
              />
              <Text style={styles.text1}>min</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Text style={styles.text0}>Break End:</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(breakEndH) =>
                  this.setState({breakEndH: Number(breakEndH)})
                }
                value={'' + this.state.breakEndH}
              />
              <Text style={styles.text1}>h:</Text>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(breakEndM) =>
                  this.setState({breakEndM: Number(breakEndM)})
                }
                value={'' + this.state.breakEndM}
              />
              <Text style={styles.text1}>min</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Text style={styles.text0}>Work Time Today:</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(workTimeTodayH) =>
                  this.setState({workTimeTodayH: Number(workTimeTodayH)})
                }
                value={'' + this.state.workTimeTodayH}
              />
              <Text style={styles.text1}>h:</Text>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(workTimeTodayM) =>
                  this.setState({workTimeTodayM: Number(workTimeTodayM)})
                }
                value={'' + this.state.workTimeTodayM}
              />
              <Text style={styles.text1}>min</Text>
            </View>
          </View>
          <View style={styles.item1}>
            <Text style={styles.text0}>Work Time Total:</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Spinner
                max={100}
                min={0}
                value={this.state.workTimeTotalDay}
                color="#f60"
                numColor="#f60"
                onNumChange={(num) => this.setState({workTimeTotalDay: num})}
              />
              <Text> days</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(workTimeTotalH) =>
                  this.setState({workTimeTotalH: Number(workTimeTotalH)})
                }
                value={'' + this.state.workTimeTotalH}
              />
              <Text style={styles.text1}>h:</Text>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(workTimeTotalM) =>
                  this.setState({workTimeTotalM: Number(workTimeTotalM)})
                }
                value={'' + this.state.workTimeTotalM}
              />
              <Text style={styles.text1}>min</Text>
            </View>
          </View>
          <View style={styles.item1}>
            <Text style={styles.text0}>Flex Time Today:</Text>
            <Picker
              style={{width: 100}}
              selectedValue={this.state.flextimeTodayPositive}
              onValueChange={this.todayPlusMinus}>
              <Picker.Item label="+" value={true} />
              <Picker.Item label="-" value={false} />
            </Picker>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(flextimeTodayH) =>
                  this.setState({flextimeTodayH: Number(flextimeTodayH)})
                }
                value={'' + this.state.flextimeTodayH}
              />
              <Text style={styles.text1}>h:</Text>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(flextimeTodayM) =>
                  this.setState({flextimeTodayM: Number(flextimeTodayM)})
                }
                value={'' + this.state.flextimeTodayM}
              />
              <Text style={styles.text1}>min</Text>
            </View>
          </View>
          <View style={styles.item1}>
            <Text style={styles.text0}>Flex Time Total:</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Picker
                style={{width: 100}}
                selectedValue={this.state.flextimeTotalPositive}
                onValueChange={this.totalPlusMinus}>
                <Picker.Item label="+" value={true} />
                <Picker.Item label="-" value={false} />
              </Picker>
              <Spinner
                style={{height: 50}}
                max={100}
                min={0}
                value={this.state.flextimeTotalDay}
                color="#f60"
                numColor="#f60"
                onNumChange={(num) => this.setState({flextimeTotalDay: num})}
              />
              <Text> days</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(flextimeTotalH) =>
                  this.setState({flextimeTotalH: Number(flextimeTotalH)})
                }
                value={'' + this.state.flextimeTotalH}
              />
              <Text style={styles.text1}>h:</Text>
              <TextInput
                style={styles.text0}
                keyboardType="numeric"
                onChangeText={(flextimeTotalM) =>
                  this.setState({flextimeTotalM: Number(flextimeTotalM)})
                }
                value={'' + this.state.flextimeTotalM}
              />
              <Text style={styles.text1}>min</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonsParent}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.saveButtonPressed()}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.cancelButtonPressed()}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.resetButtonPressed()}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>*/}
    </View>
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
    marginLeft: 10,
    marginBottom: 100,
    flexDirection: 'row',
  },
  item: {
    height: 70,
    fontSize: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
  item1: {
    height: 120,
    fontSize: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
  text0: {
    fontWeight: 'bold',
    fontSize: 18,
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
