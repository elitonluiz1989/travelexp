import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { translate } from './locales';
import { color } from './components/styles';

import HomeScreen from './pages/HomeScreen';
import TravelScreen from './pages/TravelScreen';

const styles = {
  header: {
    backgroundColor: '#efefef',
    textTransform: "capitalize"
  }
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: translate('travels'),
      headerStyle: styles.header,
      headerTintColor: color.gray
    } 
  },
  Travel: {
    screen: TravelScreen,
    navigationOptions: {
      title: translate('travel'),
      headerStyle: styles.header,
      headerTintColor: color.gray
    } 
  },
  AddTravel: {
    screen: TravelScreen,
    navigationOptions: {
      title: translate('travel'),
      headerStyle: styles.header,
      headerTintColor: color.gray
    } 
  }
},
{
  initialRouteName: 'Travel',
});

export default createAppContainer(AppNavigator);