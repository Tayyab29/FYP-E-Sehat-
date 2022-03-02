import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Text, View,ActivityIndicator } from 'react-native';
import StackNav from './src/screens/StackNav';

                                  
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function App() {

  return (
      <NavigationContainer>
      <StackNav/>
      </NavigationContainer>
  );
}
