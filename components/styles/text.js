import { StyleSheet } from 'react-native';
import color from './color'

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
    color: color.black
  },
  white: {
    color: color.white
  },
  gray: {
    color: color.gray
  },
  red: {
    color: color.red
  },
  green: {
    color: color.green
  },
  blue: {
    color: color.blue
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