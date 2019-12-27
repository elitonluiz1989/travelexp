import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import { translate } from '../locales';
import NavButton from '../components/buttons/NavButon';
import { text, color, flex, mixMargins, mixPaddings, mixBorders, $colors, $sizes, app } from '../components/styles';

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
        {id: 1, description: 'uber', type: 'tranport', value: 12.25},
        {id: 2, description: 'uber', type: 'tranport', value: 50.37},
        {id: 3, description: 'dinner', type: 'feeding', value: 42.35}
      ]
    },
    {
      date: '02/12/2019',
      data: [
        {id: 4, description: 'uber', type: 'tranport', value: 12.25},
        {id: 5, description: 'lunch', type: 'feeding', value: 42.35},
        {id: 6, description: 'uber', type: 'tranport', value: 50.37},
        {id: 7, description: 'dinner', type: 'feeding', value: 42.35}
      ]
    },
    {
      date: '03/12/2019',
      data: [
        {id: 8, description: 'uber', type: 'tranport', value: 12.25},
        {id: 9, description: 'lunch', type: 'feeding', value: 42.35},
        {id: 10, description: 'uber', type: 'tranport', value: 50.37},
        {id: 11, description: 'dinner', type: 'feeding', value: 42.35}
      ]
    },
    {
      date: '04/12/2019',
      data: [
        {id: 12, description: 'uber', type: 'tranport', value: 12.25},
        {id: 13, description: 'lunch', type: 'feeding', value: 42.35},
        {id: 14, description: 'uber', type: 'tranport', value: 50.37},
        {id: 15, description: 'dinner', type: 'feeding', value: 42.35}
      ]
    },
    {
      date: '05/12/2019',
      data: [
        {id: 16, description: 'uber', type: 'tranport', value: 12.25},
        {id: 17, description: 'lunch', type: 'feeding', value: 42.35},
        {id: 18, description: 'uber', type: 'tranport', value: 50.37},
        {id: 19, description: 'dinner', type: 'feeding', value: 42.35}
      ]
    },
    {
      date: '06/12/2019',
      data: [
        {id: 20, description: 'uber', type: 'tranport', value: 12.25},
        {id: 21, description: 'lunch', type: 'feeding', value: 42.35},
        {id: 22, description: 'uber', type: 'tranport', value: 50.37},
        {id: 23, description: 'dinner', type: 'feeding', value: 42.35}
      ]
    }]
  };

  getDailyTotal = data => data.reduce((amount, item) => amount + parseFloat(item.value), 0);

  render() {
    const travelId = this.props.navigation.getParam('id') || 1;
    let travel = null;
    if (travelId) {
      travel = this.state.travels.filter((item) => item.id == travelId)[0];
    }

    if (travel !== null) {
      return(
        <View style={app.screen}>
          <View style={[
            styles.title, 
            styles.block
          ]}>
            <View style={flex.row}>
              <Text style={[
                styles.titleLabel, 
                text.capitalize, 
                text.white
              ]}>{translate('destination')}</Text>

              <Text style={[
                styles.titleText, 
                text.white
              ]}>{travel.city + ' - ' + travel.state}</Text>
            </View>

            <View style={[
              styles.titleSeparator, 
              flex.row
            ]}>
              <Text style={[
                styles.titleLabel, 
                text.capitalize, 
                text.white
              ]}>{translate('period')}</Text>

              <Text style={[
                styles.titleText, 
                text.white
              ]}>{travel.arrival + ' - ' + travel.departure}</Text>
            </View>
          </View>

          <SectionList
            style={[styles.block]}
            sections={this.state.travelExpenses}
            renderItem={({item}) =>
              <View style={[
                styles.expenseBg, 
                styles.expenseBorderedLeft, 
                styles.expenseBorderedRight
              ]}>
                <View style={[
                  styles.expense, 
                  styles.expenseBorderedBottom, 
                  flex.row]
                }>
                  <Text style={[
                    styles.expenseText, 
                    styles.expenseBorderedRight, 
                    text.capitalize
                  ]}>{item.description}</Text>

                  <Text style={[
                    styles.expenseText, 
                    styles.expenseBorderedRight, 
                    styles.expenseTextMiddle, 
                    text.capitalize
                  ]}>{item.type}</Text>

                  <Text style={[
                    styles.expenseValue, 
                    text.capitalize, 
                    text.right
                  ]}>{item.value}</Text>
                </View>
              </View>
            }
            renderSectionHeader={({section}) =>
              <View style={[                
                styles.expenseBg,
                styles.expenseHeader, 
                styles.expenseBorderedRight, 
                styles.expenseBorderedTop, 
                styles.expenseBorderedLeft
              ]}>
                <Text style={[
                  styles.expenseHeaderText, 
                  styles.title, 
                  text.center
                ]}>{section.date}</Text>
              </View>
            }
            renderSectionFooter={(item)=>
              <View style={[
                styles.expenseFooter,
                styles.expenseBg,
                styles.expenseBorderedRight, 
                styles.expenseBorderedBottom, 
                styles.expenseBorderedLeft
              ]}>
                <View style={[
                  styles.expense, 
                  flex.row
                ]}>
                  <Text style={[
                    styles.expenseDailyTotal, 
                    styles.expenseBorderedRight, 
                    text.right, 
                    text.capitalize
                  ]}>{translate('dayly total')}</Text>
                  <Text style={
                    [styles.expenseValue, 
                    text.right
                  ]}>{this.getDailyTotal(item.section.data)}</Text>
                </View>

                <NavButton  
                  navTo={() => this.props.navigation.push('AddTravel')}>   
                  <Text style={[
                    styles.expenseBtn, 
                    text.center, 
                    text.bold, 
                    text.white, 
                    text.capitalize
                  ]}>{translate('add')}</Text>
                </NavButton>
              </View>
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

const styles = StyleSheet.create({
  block: {
    ...mixMargins(10),
    ...mixPaddings(5)
  },
  title: {
    backgroundColor: $colors.mainDarker
  },
  titleSeparator: {
    ...mixBorders({color: $colors.white, side: "top"}),
    ...mixMargins({top: 5}),
    ...mixPaddings({top: 5})
  },
  titleLabel: {
    width: "30%"
  },
  titleText: {
    width: "70%"
  },
  expenseHeader: {
    borderTopRightRadius: $sizes.radius,
    borderTopLeftRadius: $sizes.radius
  },
  expenseHeaderText: {
    width: "30%",
    ...mixMargins({top: 10, left: 5}),
    ...mixPaddings(5),
    color: $colors.white
  },
  expense: {
    ...mixMargins(5),
    ...mixPaddings(5)
  },
  expenseBg: {
    backgroundColor: "#fafafa"
  },
  expenseBorderedTop: {
    ...mixBorders({color: $colors.main, side: "top"}),
  }, 
  expenseBorderedLeft: {
    ...mixBorders({color: $colors.main, side: "left"}),
  },
  expenseBorderedRight: {
    ...mixBorders({color: $colors.main, side: 'right'})
  },
  expenseBorderedBottom: {
    ...mixBorders({color: $colors.main, side: 'bottom'})
  },
  expenseText: {
    width: "40%"
  },
  expenseTextMiddle: {
    ...mixPaddings({left: 5})
  },
  expenseValue: {
    width: "20%"
  },
  expenseDailyTotal: {
    width: "80%",
    ...mixPaddings({right: 5})
  },
  expenseFooter: {
    borderBottomRightRadius: $sizes.radius, 
    borderBottomLeftRadius: $sizes.radius,
    ...mixMargins({bottom: 15})
  },
  expenseBtn: {
    backgroundColor: $colors.mainDark,
    ...mixMargins({top: 0, right: "20%", bottom: 10, left: "20%"}),
    ...mixPaddings({top: 5, right: 0, bottom: 5, left: 0}),
    width: "60%"
  }
});

export default TravelScreen;