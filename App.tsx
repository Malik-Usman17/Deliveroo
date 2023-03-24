import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen';

const {Screen, Navigator} = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <TailwindProvider> */}
      <Navigator>
        <Screen name='HomeScreen' component={HomeScreen}/>
      </Navigator>
      {/* </TailwindProvider> */}
    </NavigationContainer>
  )
}

export default App
