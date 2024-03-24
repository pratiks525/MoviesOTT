/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import Dashboard from './src/screens/dashboard';
import { BLACK } from './src/theme/colors';

function App() {
  return (
    <SafeAreaView style={style.background}>
      <Dashboard />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  background : {
      backgroundColor: BLACK,
      flex: 1
  }
})

export default App;
