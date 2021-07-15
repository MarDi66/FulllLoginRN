/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import LandingPage from './src/components/landing/LandingPage';
import LoginPage from './src/components/login/LoginPage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const screenOptions = {
    cardStyle: {
      backgroundColor: '#FFFFFF'
    }
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={ styles.app_container }>

        <StatusBar barStyle='light-content' />

        <Stack.Navigator headerMode='none' initialRouteName="Login">
          <Stack.Screen options={ screenOptions } name="Login" component={ LoginPage } />
          <Stack.Screen options={ screenOptions } name="Landing" component={ LandingPage } />
        </Stack.Navigator>

      </SafeAreaView>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({

  app_container: {
    flex: 1,
    paddingTop: 80, 
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 50
  }

});

export default App;
