import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import { translate } from '../locales';
import { FlatList } from 'react-native-gesture-handler';
import { text, color, margins, paddings, borders } from '../components/styles';
import { flex } from '../components/styles/display';

class TravelScreen extends React.Component {
  state = {
    travels: [
      { id: 1, country: 'Brasil', state: 'RJ', city: 'Rio de Janeiro', arrival: '01/12/2019', departure: '06/12/2019' },
      { id: 2, country: 'Brasil', state: 'MS', city: 'Campo Gramde', arrival: '08/12/2019', departure: '13/12/2019' },
      { id: 3, country: 'Brasil', state: 'SP', city: 'São Paulo', arrival: '15/12/2019', departure: '20/12/2019' },
      { id: 4, country: 'Brasil', state: 'PR', city: 'Curitiba', arrival: '22/12/2019', departure: '27/12/2019' },
    ],
    travelExpenses: [{
      date: '01/12/2019',
      data: [
        {id: 1, description: 'uber', value: 12.25},
        {id: 2, description: 'uber', value: 50.37},
        {id: 3, description: 'dinner', value: 42.35}
      ]
    },
    {
      date: '02/12/2019',
      data: [
        {id: 4, description: 'uber', value: 12.25},
        {id: 5, description: 'lunch', value: 42.35},
        {id: 6, description: 'uber', value: 50.37},
        {id: 7, description: 'dinner', value: 42.35}
      ]
    },
    {
      date: '03/12/2019',
      data: [
        {id: 8, description: 'uber', value: 12.25},
        {id: 9, description: 'lunch', value: 42.35},
        {id: 10, description: 'uber', value: 50.37},
        {id: 11, description: 'dinner', value: 42.35}
      ]
    },
    {
      date: '04/12/2019',
      data: [
        {id: 12, description: 'uber', value: 12.25},
        {id: 13, description: 'lunch', value: 42.35},
        {id: 14, description: 'uber', value: 50.37},
        {id: 15, description: 'dinner', value: 42.35}
      ]
    },
    {
      date: '05/12/2019',
      data: [
        {id: 16, description: 'uber', value: 12.25},
        {id: 17, description: 'lunch', value: 42.35},
        {id: 18, description: 'uber', value: 50.37},
        {id: 19, description: 'dinner', value: 42.35}
      ]
    },
    {
      date: '06/12/2019',
      data: [
        {id: 20, description: 'uber', value: 12.25},
        {id: 21, description: 'lunch', value: 42.35},
        {id: 22, description: 'uber', value: 50.37},
        {id: 23, description: 'dinner', value: 42.35}
      ]
    }]
  };

  render() {
    const travelId = this.props.navigation.getParam('id') || 1;
    let travel = null;
    if (travelId) {
      travel = this.state.travels.filter((item) => item.id == travelId)[0];
    }

    if (travel !== null) {
      return(
        <View>
          <View style={[styles.title, styles.block]}>
            <View style={flex.row}>
              <Text style={[styles.titleLabel, text.capitalize, text.white]}>{translate('destination')}</Text>
              <Text style={[styles.titleText, text.white]}>{travel.city + ' - ' + travel.state}</Text>
            </View>

            <View style={[styles.titleSeparator, flex.row]}>
              <Text style={[styles.titleLabel, text.capitalize, text.white]}>{translate('period')}</Text>
              <Text style={[styles.titleText, text.white]}>{travel.arrival + ' - ' + travel.departure}</Text>
            </View>
          </View>

          <SectionList
            style={[styles.expenses, styles.block]}
            sections={this.state.travelExpenses}
            renderItem={({item}) =>
              <View style={[styles.expense, flex.row]}>
                <Text style={[styles.expenseText, text.capitalize]}>{item.description}</Text>
                <Text style={[styles.expenseText, text.capitalize]}>{item.value}</Text>
              </View>

            }
            renderSectionHeader={({section}) => 
              <Text style={[styles.expenseHeader, styles.title, text.center]}>{section.date}</Text>
            }
            keyExtractor={(item, index) => index}
          />
        </View>
      );
    } else {
      return(
        <View>
          <Text style={[text.capitalize, text.center]}>{translate('no records')}</Text>
        </View>
      );
    }
  }
}

const travelStyles = {
  color: "#5380c9"
}

const styles = StyleSheet.create({
  block: {
    ...margins(10),
    ...paddings(5)
  },
  title: {
    backgroundColor: "#36568a"
  },
  titleSeparator: {
    ...borders({color: color.white, side: "top"}),
    ...margins({top: 5}),
    ...paddings({top: 5})
  },
  titleLabel: {
    width: "30%"
  },
  titleText: {
    width: "70%"
  },
  expenses: {
    ...borders({color: travelStyles.color}),
  },
  expenseHeader: {
    width: "30%",
    ...margins({top: 5}),
    ...paddings(5),
    color: color.white
  },
  expense: {
    ...borders({color: travelStyles.color, side: "bottom"}),
    ...margins({bottom: 5}),
    ...paddings(5)
  },
  expenseText: {
    width: "50%"
  }
});

export default TravelScreen;