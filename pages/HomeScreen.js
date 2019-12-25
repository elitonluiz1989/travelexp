import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

import NavButton from '../components/NavButon';

class HomeScreen extends React.Component {
  state = {
    travels: [
      { id: 1, country: 'Brasil', state: 'RJ', city: 'Niterói', arrival: '01/12/2019', departure: '06/12/2019' },
    ]
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.travels}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <NavButton style={styles.container} navTo={() => console.log('foi')}>   
                <Text style={[styles.text, styles.city]}>{item.city} - {item.state}</Text>
              
                <Text style={[styles.text, styles.separator]}>|</Text>            

                <Text style={[styles.text, styles.period]}>{item.arrival} | {item.departure}</Text>
              </NavButton>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    boxShadow: "1px 1px 3px #777",
    flexGrow: 1,
    margin: 5,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "#333333"
  },
  city: {
    width: "39%"
  },
  separator: {
    width: "1%"
  },
  period: {
    width: "60%",
    textAlign: "center"
  }
});

export default HomeScreen;