import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/componets/routes/Routes';
function App(){
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor={'transparent'}  />
      <Routes/>
    </NavigationContainer>
  );
}


export default App;
