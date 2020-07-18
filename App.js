import React from 'react';
import {View , SafeAreaView, ScrollView} from 'react-native';
import Navigation from './config/Navigation/Navigation';
import Drawer from './config/Drawer/Drawer';



function App() {
  return(
    <View style ={{flex: 1}}>
      <Navigation/>
    </View>
  )
}

export default App;
