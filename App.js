import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { translate } from './locales';
import { color } from './components/styles';

import HomeScreen from './pages/HomeScreen';

const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: translate('travels'),
      headerStyle: {
        backgroundColor: 'tansparent',
        boxShadow: "0px 0px 0px"
      },
      headerTintColor: color.gray
    } 
  }
});

export default createAppContainer(App);