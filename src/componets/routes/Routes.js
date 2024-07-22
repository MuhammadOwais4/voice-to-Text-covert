import React from 'react';
import {StyleSheet} from 'react-native';
import Home from '../home/Home';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../splash/Splash';
function App(){
  const Stack = createStackNavigator();

  return (
  
    <Stack.Navigator
  initialRouteName='SplashScreen'
  screenOptions={{
    cardStyle: { backgroundColor: 'white' },
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width * 2, 0], // Adjusted from layouts.screen.width
              }),
            },
          ],
        },
      };
    },
  }}
>
  <Stack.Screen options={{ headerShown: false }}  name="SplashScreen" component={SplashScreen} />
  <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
</Stack.Navigator>
  
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
