import React from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

class Join extends Component {
    onLearnMore = (user) => {
        this.props.navigation.navigate('Details', { ...user });
    }; 

    render () {
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.header}>WELCOME!</Text>
            <Separator></Separator>
            <TouchableOpacity
            style={styles.buttonStyle} onPress={() => Alert.alert('You are now joinng a group!')}>
                <Text style={styles.text}>JOIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonStyle} onPress={() => Alert.alert('You are now creating a group!')}>
                <Text style={styles.text}>CREATE</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonStyle} onPress={() => Alert.alert('You are now going to a chat!')}>
                <Text style={styles.text}>CHAT</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>

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
              fontSize: 30,
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
              backgroundColor: "#6fa8dcff",
            }, 
        });
    }
}
