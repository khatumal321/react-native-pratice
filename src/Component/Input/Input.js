
import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import { useLinkProps } from '@react-navigation/native';


function Input(props) {
  return(
    <View>
      <TextInput style={styles.input}  placeholder={props.value}/>
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    paddingLeft: 30,
    padding: 10,
    fontSize: 20,
    width: 350,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#D9D9D9',
    alignItems: 'center',
  },

  
});

export default Input;
