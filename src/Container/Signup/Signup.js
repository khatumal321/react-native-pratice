
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import Input2 from './../../Component/Input/Input'

class Signup extends React.Component{
    render(){
        return(
        <View style={styles.contanier}>
        <Text style={styles.text}>Sign Up</Text>
        <Input2/>
        <Input2/>
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

export default Signup;
