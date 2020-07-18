import React, { Component } from 'react';
import {Alert, Image} from 'react-native';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';
export default class ButtonIconExample extends Component {
  render() {
    return (
      <>
          <Button iconRight bordered 
          onPress={() => Alert.alert('Simple Button pressed')} 
          style={{width: 350, height: 60, borderColor: '#D9D9D9', justifyContent: 'center'}}
          >
          <Image
            source={require('./../googleBtn/googleicon.png')}
             style={{width: 35, height: 35}}/>
            <Text style={{color: '#D9D9D9'}}>Continue with Google</Text>
          </Button>
          </>
    );
  }
}