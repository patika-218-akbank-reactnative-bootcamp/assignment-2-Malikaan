import * as React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function HomeSubHeader() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.buttonText}>Toplu Mesaj Listeleri</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.buttonText}>Yeni Grup</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeSubHeader;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    padding: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
});
