import * as React from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView, Alert, TouchableOpacity, Image, TextInput, Form, Keyboard, ScrollView} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { createAppContainer, withOrientation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ModalDropdown from 'react-native-modal-dropdown';
import CalendarPicker from 'react-native-calendar-picker';


function Separator() {
  return <View style = {styles.separator}/>;
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'HOME',
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <Image source={require('./assets/mediumDance.png')} />
          <Separator></Separator>
          <Text style={styles.header}>WELCOME</Text>
          <Text>TO STUDY BUDDIES</Text>
          <Separator></Separator>
          <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => this.props.navigation.navigate('Join')}>
              <Text style={styles.text}>JOIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => this.props.navigation.navigate('Create')}>
              <Text style={styles.text}>CREATE</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => this.props.navigation.navigate('Chat')}>
              <Text style={styles.text}>CHAT</Text>
          </TouchableOpacity>
      </View>
      </SafeAreaView>
    )}
}


export class Join extends React.Component {
  static navigationOptions = {
    title: 'JOIN',
  };
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
 
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <ScrollView>
        <View style={styles.pages}>
          <Text style={styles.pageHeader}>JOIN A STUDY SESSION</Text>
          <Separator></Separator>
          <ModalDropdown style={styles.dropDown} options={courses} onSelect={(index,value)=>{this.setState({selected:value})}}>
          </ModalDropdown>
          <Separator></Separator>
          <TextInput
          // name={minNum}
          style={styles.textInput}
          placeholder="Minimum amount of STUDY BUDDIES"
          keyboardType={'numeric'}
          type={'numeric'}
          maxLength={2}
          onBlur={Keyboard.dismiss()}
          />
          <Separator></Separator>
          <TextInput
          // name={maxNum}
          style={styles.textInput}
          placeholder="Maximum amount of STUDY BUDDIES"
          keyboardType={'numeric'}
          maxLength={2}
          onBlur={Keyboard.dismiss()}
          />
          <Separator></Separator>
          <Text style={styles.calendarText}>Select a study date:{"\n"}{ startDate }</Text>
          <CalendarPicker onDateChange={this.onDateChange}  style={styles.calendarContainer} 
          width={300} todayBackgroundColor={'#6fa8dcff'} selectedDayColor={'white'}>
          </CalendarPicker>
          <TouchableOpacity
            style={styles.buttonStyle} 
            onPress={() => Alert.alert("Searching...")}>
                <Text style={styles.text}>SEARCH</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    );
  }
}

class Create extends React.Component {
  static navigationOptions = {
    title: 'CREATE',
  };
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <ScrollView>
        <View style={styles.pages}>
          <Text style={styles.pageHeader}>CREATE A STUDY SESSION</Text>
          <Separator></Separator>
          <TextInput
          // name={minNum}
          style={styles.textInput}
          placeholder="Session Name"
          maxLength={20}
          onBlur={Keyboard.dismiss()}
          value={this.state.name}
          />
          <Separator></Separator>
          <ModalDropdown style={styles.dropDown} options={courses} onSelect={(index,value)=>{this.setState({selected:value})}}>
          </ModalDropdown>
          <Separator></Separator>
          <TextInput
          // name={minNum}
          style={styles.textInput}
          placeholder="Minimum amount of STUDY BUDDIES"
          keyboardType={'numeric'}
          type={'numeric'}
          maxLength={2}
          onBlur={Keyboard.dismiss()}
          />
          <Separator></Separator>
          <TextInput
          // name={maxNum}
          style={styles.textInput}
          placeholder="Maximum amount of STUDY BUDDIES"
          keyboardType={'numeric'}
          maxLength={2}
          onBlur={Keyboard.dismiss()}
          />
          <Separator></Separator>
          <Text style={styles.calendarText}>Select a study date:{"\n"}{ startDate }</Text>
          <CalendarPicker onDateChange={this.onDateChange}  style={styles.calendarContainer} 
          width={300} todayBackgroundColor={'#6fa8dcff'} selectedDayColor={'white'}>
          </CalendarPicker>
          <TouchableOpacity
            style={styles.buttonStyle} 
            onPress={() => Alert.alert("Searching...")}>
                <Text style={styles.text}>CREATE</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    );
  }
}

class Chat extends React.Component {
  static navigationOptions = {
    title: 'CHAT',
  };
  render() {
    return (
      <View style={styles.pages}>
        <Text style={styles.pageHeader}>MY STUDY SESSIONS</Text>
      </View>
    );
  }
}

const courses = ['Data Structures', 'Calculus', 'Discrete Math', 'Probability and Statistics', 'Other'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8e5f1ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
  },

  textInput: {
    backgroundColor: 'white',
    color: 'black',
  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 24,
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  header: {
    fontSize: 40,
    fontFamily: 'Roboto',
  },

  buttonStyle: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: '#6fa8dcff',
  }, 

  pageHeader: {
    fontFamily: 'Roboto',
    fontSize: 30,
    alignItems: 'stretch',
    margin: 10,
  },

  pages: {
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: '#d8e5f1ff',
  },

  inputContainer: {
    paddingTop: 15
  },

  textInput: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    color: 'black',
    width: 300,
  },

  dropDown: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    color: 'black',
    width: 300,
    fontSize:25, 
    color:'#c7c7c7', 
    justifyContent: 'center'
  },

  calendarContainer: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      marginTop: 100,
    },

  calendarText: {
    fontSize:12, 
      alignItems: 'center', 
      backgroundColor: 'white', 
      width: 300, 
      height: 50, 
      textAlignVertical: 'center',
      paddingLeft: 20,
  }
});

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Join: Join,
    Create: Create,
    Chat: Chat,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}
