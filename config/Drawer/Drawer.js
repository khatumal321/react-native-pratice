import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './../../src/Container/Login/Login';
import SignUp from './../../src/Container/Signup/Signup';
import Home from './../../src/Container/Home/Home';
import Header from './../../src/Component/Header/Header';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Store" component={Header} />
        <Drawer.Screen name="Top Ranking" component={Login} />
        <Drawer.Screen name="Announcement" component={Login} />
        <Drawer.Screen name="FAQ" component={Login} />
        <Drawer.Screen name="Contact Us" component={Login} />
        <Drawer.Screen name="Setting" component={Login} />
        <Drawer.Screen name="US" component={Login} />
        <Drawer.Screen name="Logout" component={Login} />
      </Drawer.Navigator>
  );
}
