import React from 'react';

import {TouchableOpacity, TouchableOpacityProps,  Text, StyleSheet} from 'react-native';

type ButtonProps = TouchableOpacityProps;

export function Button({ ...rest } : ButtonProps ) {
  return (
    <TouchableOpacity 
        style={styles.btn} 
        activeOpacity={.7} 
        {...rest}
      >
      <Text style={styles.btnTitle}>Add </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
  },
  btnTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
