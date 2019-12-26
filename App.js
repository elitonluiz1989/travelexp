import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { translate } from './locales';
import { color } from './components/styles';

import HomeScreen from './pages/HomeScreen';
import TravelScreen from './pages/TravelScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: translate('travels'),
      headerStyle: {
        backgroundColor: 'tansparent',
        boxShadow: "0px 0px 0px"
      },
      headerTintColor: color.gray
    } 
  },
  Travel: {
    screen: TravelScreen,
    navigationOptions: {
      title: translate('travel'),
      headerStyle: {
        backgroundColor: 'tansparent',
        boxShadow: "0px 0px 0px"
      },
      headerTintColor: color.gray
    } 
  },
  AddTravel: {
    screen: TravelScreen,
    navigationOptions: {
      title: translate('travel'),
      headerStyle: {
        backgroundColor: 'tansparent',
        boxShadow: "0px 0px 0px"
      },
      headerTintColor: color.gray
    } 
  }
},
{
  initialRouteName: 'Travel',
});

export default createAppContainer(AppNavigator);