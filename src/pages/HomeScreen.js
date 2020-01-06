import React from 'react';
import { View, FlatList, Text, StyleSheet, Platform } from 'react-native';

import NavButton from '../components/buttons/NavButon';
import { text, position, mixBorders, mixPaddings, mixMargins, mixPositions, app, $colors, mixBorderRadius, display } from '../components/styles';
import { translate } from '../locales';
import Travel from '../models/Travel';

class HomeScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      db: null,
      messages: {
        success: null,
        error: null
      },
      travels: []
    }
  }

  componentDidMount() {
    this.getTravels();
  }

  async getTravels() {
    let travels = await new Travel().all();
    
    if (travels.hasErrors()) {
      this.setState({
        messages: { error: travels.errors }
      });

      return;
    }

    this.setState({
      travels: travels.items()
    });
  }

  render() {
    return (
      <View style={[
        app.screen,
        styles.homeView,
        position.relative
      ]}>
        <View style={ this.state.messages.error !== null ?  app.message :  display.none }>
          <Text>{this.state.messages.error}</Text>
        </View>

        <View style={ this.state.travels !== null && this.state.travels.length === 0 ?  app.message :  display.none }>
          <Text style={ [text.center, text.capitalize] }>{ translate('no records') }</Text>
        </View>

        <FlatList
          data={this.state.travels}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <NavButton
                style={[
                  styles.homeItems,
                  styles.container
                ]}
                navTo={() => this.props.navigation.navigate('Travel', { id: item.id })}>
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
    ...mixPaddings({ bottom: 85 })
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
    ...mixBorders({ color: "#ccc", side: 'right' }),
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
    ...mixBorders({ color: $colors.mainDarker }),
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