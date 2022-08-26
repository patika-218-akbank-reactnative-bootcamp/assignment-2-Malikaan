import * as React from 'react';

import {
  Alert,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import CustomButton from '../button/button';

function MessageInput() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Type.." />
      <CustomButton size={36} onPress={() => Alert.alert('Sent')} />
    </View>
  );
}

export default MessageInput;

const styles = StyleSheet.create({
  container: {
    borderTopColor: 'black',
    borderTopWidth: 2,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    width: '100%',
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    zIndex: 10,
    backgroundColor: '#fff',
  },
  input: {
    fontSize: 20,
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 2,
    flex: 1,
    height: 36,
    paddingLeft: 8,
    marginRight: 8,
  },
});
