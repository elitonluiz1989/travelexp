import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';

const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Travels',
      headerStyle: {
        backgroundColor: 'tansparent',
        boxShadow: "0 0 0"
      },
      headerTintColor: '#333'
    } 
  }
});

export default createAppContainer(App);