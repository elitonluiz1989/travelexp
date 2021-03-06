
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { translate } from './locales';
import { $colors } from './components/styles';

import HomeScreen from './pages/HomeScreen';
import TravelScreen from './pages/TravelScreen';

const styles = {
  header: {
    backgroundColor: $colors.main,
    textTransform: "capitalize",
    ...Platform.select({
      android: {
        elevation: 0,
        fontSize: 18
      }
    })
  }
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: translate('travels'),
      headerStyle: styles.header,
      headerTintColor: $colors.white
    }
  },
  Travel: {
    screen: TravelScreen,
    navigationOptions: {
      title: translate('travel'),
      headerStyle: styles.header,
      headerTintColor: $colors.white
    }
  },
  AddTravel: {
    screen: TravelScreen,
    navigationOptions: {
      title: translate('travel'),
      headerStyle: styles.header,
      headerTintColor: $colors.white
    }
  }
},
{
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);