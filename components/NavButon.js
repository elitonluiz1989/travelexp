import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const NavButton = props => {
  return (
    <TouchableOpacity style={props.style} onPress={props.navTo}>
      {props.children}
    </TouchableOpacity>
  );
};

export default NavButton;