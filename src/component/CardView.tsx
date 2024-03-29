import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
const CardView = props => {
  return (
    <TouchableOpacity
      style={{ ...styles.card, ...props.style }}
      onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.26,
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
});

export default CardView;
