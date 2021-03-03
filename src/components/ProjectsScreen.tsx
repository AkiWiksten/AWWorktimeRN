import { useFocusEffect } from '@react-navigation/native';
import React, {Dispatch, Fragment, SetStateAction} from 'react';
import {useState} from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
const s = require('../other/myStyles');

type PsProps = {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
};

const ProjectsScreen: React.FC<PsProps> = (props) => {
  const [selectedId0, setSelectedId0] = useState(null);
  const [selectedId1, setSelectedId1] = useState(null);
  const [data0, setSelectedData0] = useState([
    {key: 'Project1', time: '2:00'},
    {key: 'Project2', time: '4:00'},
  ]);
  const [data1, setSelectedData1] = useState([
    {key: 'Project1'},
    {key: 'Project2'},
  ]);
  const [counter, setCounter] = useState('8:00');
  const [selectedItem0, setSelectedItem0] = useState(null);
  const [selectedItem1, setSelectedItem1] = useState(null);
  const handleClick0 = (index: number) => {
    console.log('handleClick index0: ', index);
  };

  const handleClick1 = (index: number) => {
    console.log('handleClick index1: ', index);
  };

  const copyButtonPressed = () => {
  };

  const upperDeleteButtonPressed = () => {
  };

  const lowerDeleteButtonPressed = () => {
  };
  return (
    <Fragment>
      <Text style={s.date}>Selected Day: {props.selectedDate}</Text>
      <FlatList
        data={data0}
        extraData={selectedId0}
        renderItem={({item}) => {
          return (
            <View style={selectedItem0 === item.id ? s.item1 : s.item0}>
              <TouchableHighlight
                underlayColor="lightgreen"
                onPress={() => handleClick0(item.id)}>
                <Text style={s.text0}>{item.key}</Text>
              </TouchableHighlight>
              <TextInput style={s.textInput}>{item.time}</TextInput>
            </View>
          );
        }}
      />
      <View style={s.buttonContainer}>
        <TouchableOpacity style={s.button} onPress={() => copyButtonPressed()}>
          <Text style={s.buttonText}>Copy Project Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={s.button}
          onPress={() => upperDeleteButtonPressed()}>
          <Text style={s.buttonText}>Delete Above</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data1}
        extraData={selectedId1}
        renderItem={({item, index}) => {
          return (
            <View style={selectedItem1 === index ? s.item1 : s.item0}>
              <TouchableHighlight
                underlayColor="lightgreen"
                onPress={() => handleClick1(index)}>
                <Text style={s.text0}>{item.key}</Text>
              </TouchableHighlight>
            </View>
          );
        }}
      />
      <View style={s.buttonContainer}>
        <TouchableOpacity
          style={s.button}
          onPress={() => props.navigation.navigate('Details')}>
          <Text style={s.buttonText}>Create Project</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={s.button}
          onPress={() => lowerDeleteButtonPressed()}>
          <Text style={s.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default ProjectsScreen;
