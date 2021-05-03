import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
// import type {Node} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import Camera from './src/Camera';
import ContactScreen from './src/ContactScreen'
import ReminderScreen from './src/ReminderScreen'
import TempView from './src/TempView';
import CallLogView from './src/CallLogView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Contacts" component={ContactScreen} />
        <Stack.Screen name="Reminders" component={ReminderScreen} />
        <Stack.Screen
          name="Logs"
          component={CallLogView}
          initialParams={['a', 'b']}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default App;
