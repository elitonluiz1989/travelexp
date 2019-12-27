import React from 'react';
import { TouchableOpacity } from 'react-native';

const NavButton = props => {
  return (
    <TouchableOpacity style={props.style} onPress={props.navTo}>
      {props.children}
    </TouchableOpacity>
  );
};

export default NavButton;