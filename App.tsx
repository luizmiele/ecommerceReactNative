//import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import StackComponent from './src/routes/stack';

export default function App() {
  return (
    <NavigationContainer>
      <StackComponent/>
    </NavigationContainer>
  );
}

