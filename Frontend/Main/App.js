import * as React from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView, Alert, TouchableOpacity, 
  Image, TextInput, Form, Keyboard, ScrollView, List, FlatList, Dimensions, TouchableHighlight} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { createAppContainer, withOrientation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ModalDropdown from 'react-native-modal-dropdown';
import CalendarPicker from 'react-native-calendar-picker';
import faker from 'faker';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';


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
          <Text>WELCOME</Text>
          <Text style={styles.header}>STUDY BUDDIES</Text>
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
          <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => this.props.navigation.navigate('Profile')}>
              <Text style={styles.text}>PROFILE</Text>
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
          <ModalDropdown style={styles.dropDown} options={courses} onSelect={(index,value)=>{this.setState({selected:value})}}
           onPress={() => {
            this.props.navigation.navigate('Feed', {subject: value})}}>
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
            onPress={() => this.props.navigation.navigate('Feed')}>
            <Text style={styles.text}>SEARCH</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    );
  }
}

class SignUp extends React.Component {
  static navigationOptions = {
    title: 'CREATE PROFILE',
  defaultNavigationOptions: {
  headerStyle: {
    backgroundColor: '#d8e5f1',
  },
  headerTintColor: '#d8e5f1',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
  },
};
  render() {
    const { navigation } = this.props;
    const otherParam = navigation.getParam('otherParam', 'Profile');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.header}></View>
      {/* <Image source={require('C:\Users\marya\temp\StudyBuddies\Frontend\HankRU\assets')}></Image> */}
        <Separator>  </Separator>
          <Separator>  </Separator>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
            <Separator>  </Separator>
      <Text style={styles.name}>
          Complete Your Profile
        </Text>
    
      <Separator>  </Separator>
              <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="First Name"
              underlineColorAndroid='transparent'
              onChangeText={(First) => this.setState({First})}/>
        </View>              
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Last Name"
              underlineColorAndroid='transparent'
              onChangeText={(Last) => this.setState({Last})}/>
        </View>              
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="School"
              underlineColorAndroid='transparent'
              onChangeText={(School) => this.setState({School})}/>
        </View> 
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Year"
              underlineColorAndroid='transparent'
              onChangeText={(Year) => this.setState({Year})}/>
       
        </View> 
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Major"
              underlineColorAndroid='transparent'
              onChangeText={(Major) => this.setState({Major})}/>
        </View>  
        <TouchableHighlight style={styles.buttonContainer} title= "SeeProfile" onPress={() => this.props.navigation.navigate('Profile')}>
            <Text>Next</Text>
        </TouchableHighlight>                                            
            </View>
        </View>
      </View>
    );
  }
}


class LoginView extends React.Component {
  static navigationOptions = {
    title: 'LOGIN',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#d8e5f1',
      },
      headerTintColor: '#d8e5f1',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  };

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
  
  render() {
    return (
      <View style={styles.LoginContainer}>
      <Separator></Separator>
      <Text style={styles.LoginTitle}>
          Hello
        </Text>
    
      <Separator>  </Separator>
       <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} title= "Sign Up" onPress={() => this.props.navigation.navigate('Sign')}>
            <Text>Sign Up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class Profile extends React.Component {
  static navigationOptions = {
    title: 'PROFILE',
  defaultNavigationOptions: {
  headerStyle: {
    backgroundColor: '#d8e5f1',
  },
  headerTintColor: '#d8e5f1',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
  },
};
  render() {
   
    return (
      <View style={styles.container2}>
      <View style={styles.header2}>
        <View style={styles.headerContent2}>
            <Image style={styles.avatar2}
              source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

            <Text style={styles.name2}>Bob Builder</Text>
            <Text style={styles.userInfo2}>tuh19937@temple.edu </Text>
            <Text style={styles.userInfo2}>Sophomore </Text>
        </View>
      </View>

      <View style={styles.Container3}>
         
          <Text>Home</Text>
        </View>

        <View style={styles.Container3}>
            <Text>Settings</Text>
          </View>
        

        <View style={styles.Container3}>
            <Text>Account Details</Text>
          </View>
        

        <View style={styles.Container3}>
            <Text>Edit Profile Photo</Text>
          </View>
      </View>
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
        <Separator></Separator>
        <Image source={require('./assets/problem.png')} style={{justifyContent:'center'}} />
        <Separator></Separator>
        <Text style={{justifyContent:'center', textAlign:'center', textAlignVertical:'center'}}>Coming Soon!</Text>
      </View>
    );
  }
}

class Session extends React.Component {
  static navigationOptions = {
    title: 'SESSION',
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.pages}>
        <Separator></Separator>
        <Text style={styles.showTitle}>{navigation.getParam('name', 'NO NAME')}</Text>
        <Separator></Separator>
        <Text style={{fontWeight: 'bold'}}>SUBJECT</Text>
        <Text style={styles.text}>{navigation.getParam('subject', 'NO SUBJECT')}</Text>
        <Separator></Separator>
        <Text style={{fontWeight: 'bold'}}>CURRENT STUDY BUDDY SIZE</Text>
        <Text style={styles.text}>{navigation.getParam('current', 'NO MEMBERS')}</Text>
        <Separator></Separator>
        <Text style={{fontWeight: 'bold'}}>DESCRIPTION</Text>
        <Text style={styles.text}>{navigation.getParam('description', 'NO DESCRIPTION')}</Text>
      </View>
    );
  }
}


class Feed extends React.Component {

  constructor(props) {
    super(props);

    const fakeData = [];
    for(i = 0; i < 100; i+= 1) {
      fakeData.push({
        type: 'NORMAL',
        item: {
          id: i,
          image: faker.image.avatar(),
          name: faker.name.firstName(),
          description: faker.random.words(5),
          current: faker.random.number({
            'min': 1,
            'max': 10
          }),
          subject: Join.setState,
        },
      });
    }
    this.state = {
      list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(fakeData),
    };

    this.layoutProvider = new LayoutProvider((i) => {
      return this.state.list.getDataForIndex(i).type;
    }, (type, dim) => {
      switch (type) {
        case 'NORMAL': 
          dim.width = SCREEN_WIDTH;
          dim.height = 100;
          break;
        default: 
          dim.width = 0;
          dim.height = 0;
          break;
      };
    })
  }

  rowRenderer = (type, data) => {
    const { image, name, description, current, subject } = data.item;
    return (
        <View style={styles.listItem}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.body}>
            <Text style={styles.name} onPress={() => {
            this.props.navigation.navigate('Session', {image: image, name: name, description: description, current: current, subject: subject});
          }}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
    )
  }

  render() {
    return (
      <View style={styles.listContainer}>
        <RecyclerListView
          style={{flex: 1}}
          rowRenderer={this.rowRenderer}
          dataProvider={this.state.list}
          layoutProvider={this.layoutProvider}
        />
      </View>
    );
  }
}

const SCREEN_WIDTH = Dimensions.get('window').width;

const courses = ['Data Structures', 'Calculus', 'Discrete Math', 'Probability and Statistics', 'Other'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8e5f1ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'black',
    textAlign: 'left',
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
    paddingTop: 15,
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
  },

  item: {
    backgroundColor: '#d8e5f1ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  itemTitle: {
    width: 300,
    fontSize: 15,
  },

  listContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    minHeight: 1,
    minWidth: 1,
  },
  body: {
    marginLeft: 10,
    marginRight: 10,
    maxWidth: SCREEN_WIDTH - (80 + 10 + 20),
  },
  image: {
    height: 80,
    width: 80,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    opacity: 0.5,
  },

  listItem: {
    flexDirection: 'row',
    margin: 10,
  },

  showTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 30,
  },

  header2:{
    backgroundColor: "white",
  },

  headerContent2:{
    padding:30,
    alignItems: 'center',
  },
  avatar2: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name2:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo2:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body2:{
    backgroundColor: "#d8e5f1ff",
    height:500,
    alignItems:'center',
  },
  item2:{
    flexDirection : 'row',
  },
  infoContent2:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    paddingLeft:5
  },
  iconContent2:{
    flex:1,
    alignItems:'center',
    paddingRight:2,
  },
  icon2:{
    width:30,
    height:30,
    marginTop:20,
  },
  info2:{
    fontSize:18,
    marginTop:20,
    color: "#696969",

  },
    Container3: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#d8e5f1",
    alignSelf: 'center'
  },

  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#d8e5f1ff',
    borderRadius:30,
    borderBottomWidth: 1,
    width:250,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
  },

  loginButton: {
    backgroundColor: "#d8e5f1ff",
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },

  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },

  loginText: {
    color: 'white',
  },

  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#6fa8dcff',
    flex:1,
},

LoginContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff',
},

LoginTitle:{
  textAlign: 'center',
  fontSize:40,
  },

name:{
  fontSize:28,
  color: "#696969",
  fontWeight: "600"
},



});


const RootStack = createStackNavigator(
  {
    Login: LoginView,
    Home: HomeScreen,
    Join: Join,
    Create: Create,
    Chat: Chat,
    Feed: Feed,
    Session: Session,
    Profile: Profile,
    Sign: SignUp,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}
