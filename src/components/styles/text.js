import { StyleSheet } from 'react-native';
import { $colors } from './variables'

export default StyleSheet.create({
  center: {
    textAlign: "center"
  },
  left: {
    textAlign: "left"
  },
  right: {
    textAlign: "right"
  },
  justify: {
    textAlign: "justify"
  },
  alignAuto: {
    textAlign: "auto"
  },
  black: {
    color: $colors.black
  },
  white: {
    color: $colors.white
  },
  gray: {
    color: $colors.gray
  },
  red: {
    color: $colors.red
  },
  green: {
    color: $colors.green
  },
  blue: {
    color: $colors.blue
  },
  bold: {
    fontWeight: "bold"
  },
  caseNone: {
    textTransform: "none"
  },
  uppercase: {
    textTransform: "uppercase"
  },
  lowercase: {
    textTransform: "lowercase"
  },
  capitalize: {
    textTransform: "capitalize"
  }
});