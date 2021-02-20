import React, {Dispatch, Fragment, SetStateAction} from 'react';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

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
  return (
    <Fragment>
      <Text style={styles.date}>Selected Day: {props.selectedDate}</Text>
      <FlatList
        data={data0}
        extraData={selectedId0}
        renderItem={({item}) => {
          return (
            <View
              style={selectedItem0 === item.id ? styles.item1 : styles.item0}>
              <TouchableHighlight
                underlayColor="lightgreen"
                onPress={() => handleClick0(item.id)}>
                <Text style={styles.text0}>{item.key}</Text>
              </TouchableHighlight>
              <TextInput style={styles.textInput}>{item.time}</TextInput>
            </View>
          );
        }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => copyButtonPressed()}>
          <Text style={styles.buttonText}>Copy Project Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => upperDeleteButtonPressed()}>
          <Text style={styles.buttonText}>Delete Above</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data1}
        extraData={selectedId1}
        renderItem={({item, index}) => {
          return (
            <View style={selectedItem1 === index ? styles.item1 : styles.item0}>
              <TouchableHighlight
                underlayColor="lightgreen"
                onPress={() => handleClick1(index)}>
                <Text style={styles.text0}>{item.key}</Text>
              </TouchableHighlight>
            </View>
          );
        }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Details')}>
          <Text style={styles.buttonText}>Create Project</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => lowerDeleteButtonPressed()}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};
const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 22,
    marginLeft: 10,
  },
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
});

export default ProjectsScreen;
