
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
import {ListItem, CheckBox,Body} from 'native-base';

class Home extends React.Component{
    render(){
        return(
          <View style={styles.contanier}>
        <Text style={styles.text}>Home Page</Text>
        <View style={styles.button}>
        <Button title='Signup'/>
        </View>
      </View>
        )
    }
}




const styles = StyleSheet.create({
  contanier: {
    paddingTop: 80,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    marginTop: 30,
    width: 350,
  },
  text: {
    fontSize: 32,
    paddingTop: 50,
  }
  
});

export default Home;
