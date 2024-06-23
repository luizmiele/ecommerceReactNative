import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackComponent from './src/routes/stack';

export default function App() {
  return (
    <NavigationContainer>
      <StackComponent/>
    </NavigationContainer>
  );
}

