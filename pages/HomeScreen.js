import React from 'react';
import { View, FlatList, Text, StyleSheet, Platform } from 'react-native';

import NavButton from '../components/buttons/NavButon';
import { text, position, mixBorders, mixPaddings, mixMargins, mixPositions, app, $colors, mixBorderRadius } from '../components/styles';
import { translate } from '../locales';

class HomeScreen extends React.Component {
  state = {
    travels: [
      { id: 1, country: 'Brasil', state: 'RJ', city: 'Rio de Janeiro', arrival: '01/12/2019', departure: '06/12/2019' },
      { id: 2, country: 'Brasil', state: 'MS', city: 'Campo Gramde', arrival: '08/12/2019', departure: '13/12/2019' },
      { id: 3, country: 'Brasil', state: 'SP', city: 'São Paulo', arrival: '15/12/2019', departure: '20/12/2019' },
      { id: 4, country: 'Brasil', state: 'PR', city: 'Curitiba', arrival: '22/12/2019', departure: '27/12/2019' },
    ]
  };
  render() {
    return (
      <View style={[
        app.screen, 
        styles.homeView, 
        position.relative
      ]}>
        <FlatList
          data={this.state.travels}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <NavButton
                style={[
                  styles.homeItems, 
                  styles.container
                ]}
                navTo={() => this.props.navigation.navigate('Travel', {id: item.id})}>   
                <View style={styles.city}>
                  <Text style={text.gray}>{item.city} - {item.state}</Text>
                </View>

                <Text style={[
                  styles.period, 
                  text.gray, 
                  text.center
                ]}>{item.arrival} - {item.departure}</Text>
              </NavButton>
            );
          }}
        />

        <NavButton 
          style={[styles.homeItems, styles.addTravel]} 
          navTo={() => this.props.navigation.navigate('AddTravel')}>   
          <Text style={[
            styles.addTravelTxt, 
            text.center, 
            text.bold,
            text.capitalize
          ]}>{translate('add')}</Text>
        </NavButton>
      </View>
    );
  }
}

const $vars = {
  addTravel: {
    width: 96,
    border: "#c3efff",
    text: "#70acff"
  }
}

const styles = StyleSheet.create({
  homeView: {
    ...mixPaddings({bottom: 85})
  },
  homeItems: {
    backgroundColor: $colors.white,
    ...mixBorderRadius(5),
    ...mixPaddings(15)
  },
  container: {
    ...Platform.select({
      android: {
        elevation: 1
      }
    }),
    flexGrow: 1,
    ...mixMargins(6),
    alignItems: "center",
    flexDirection: "row",
  },
  city: {
    ...mixBorders({color: "#ccc", side: 'right'}),
    width: "39%"
  },
  separator: {
    width: "1%"
  },
  period: {
    width: "60%",
  },
  addTravel: {
    backgroundColor: $colors.white,
    ...mixBorders({color: $colors.mainDarker}),
    ...mixPositions({
      type: 'absolute', 
      width: $vars.addTravel.width, 
      centralized: "horizontal", 
      corners: {
        bottom: 5
      }
    }),
    width: $vars.addTravel.width + "%",
  },
  addTravelTxt: {
    color: $colors.mainDarker
  }
});

export default HomeScreen;