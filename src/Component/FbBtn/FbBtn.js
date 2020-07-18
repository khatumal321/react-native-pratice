import React, { Component } from 'react';
import {Alert, Image} from 'react-native';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';
export default class ButtonIconExample extends Component {
  render() {
    return (
      <>
          <Button iconRight primary 
          onPress={() => Alert.alert('Simple Button pressed')}
          style={{width: 350, height: 60, borderColor: '#D9D9D9', justifyContent: 'center'}}
          >
            {/* <Image
            source={require('./../FbBtn/fbicon.png')}
            style={{width: 35, height: 35}}/> */}
            <Icon ios='ios-menu' android="md-fb" style={{fontSize: 20, color: 'white'}}/>
            <Text style={{color: '#fff'}}>Continue with Facebook</Text>
          </Button>
          </>
    );
  }
}