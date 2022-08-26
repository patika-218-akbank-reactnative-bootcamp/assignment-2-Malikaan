import * as React from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';

function CustomButton({onPress, size}) {
  return (
    <TouchableOpacity onPress={() => (onPress ? onPress() : null)}>
      <View
        style={{
          ...styles.square,
          height: size ? size : 20,
          width: size ? size : 20,
        }}
      />
    </TouchableOpacity>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  square: {
    borderColor: 'black',
    height: 20,
    width: 20,
    borderRadius: 4,
    borderWidth: 2,
    margin: 4,
  },
});
