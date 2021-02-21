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
    /*if(state.selectedItem0 === index) {
      setState({selectedItem0: null})
    } else {
      setState({selectedItem0: index})
    }*/
    console.log('handleClick index0: ', index);
    //console.log("handleClick selectedItem0: ", state.selectedItem0)
  };

  const handleClick1 = (index: number) => {
    /*if(state.selectedItem1 === index) {
      setState({selectedItem1: null})
    } else {
      setState({selectedItem1: index})
    }*/
    console.log('handleClick index1: ', index);
    //console.log("handleClick selectedItem1: ", state.selectedItem1)
    //console.log("handleClick array1: ", state.data1[state.selectedItem1])
    //console.log("handleClick data1: ", state.data1)
  };

  const copyButtonPressed = () => {
    /*console.log("copyButtonPressed0: ", state.data1[state.selectedItem1])
    console.log("copyButtonPressed1: ", state.data1)
    console.log("copyButtonPressed2: ", state.selectedItem1)
    let item = {key: state.data1[state.selectedItem1].key, time: '0:00'}
    let exists = false
    state.data0.find(data => data.key ===
      state.data1[state.selectedItem1].key ? exists = true :
      null
    )
    console.log("copyButtonPressed3: ", item)
    if(!exists) {
      setState(prevState => ({data0: [...prevState.data0, item]}))
    } else {
      alert('Project already exists!')
    }*/
  };

  const upperDeleteButtonPressed = () => {
    //state.data0.splice(state.selectedItem0, 1)
    //forceUpdate()
  };

  const lowerDeleteButtonPressed = () => {
    //state.data1.splice(state.selectedItem1, 1)
    //forceUpdate()
  };
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('useFocusEffect: ProjectsScreen is focused');
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions

        console.log('useFocusEffect: ProjectsScreen is not focused');
      };
    }, []),
  );
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
