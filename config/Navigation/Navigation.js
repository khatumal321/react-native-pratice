import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './../../src/Container/Login/Login';
import SignUp from './../../src/Container/Signup/Signup';
import Drawer from './../Drawer/Drawer'
const Stack = createStackNavigator();


function Navigation() {
  return (
      <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Drawer} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Navigation;