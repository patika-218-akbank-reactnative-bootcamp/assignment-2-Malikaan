import * as React from 'react';

import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import CustomButton from '../button/button';
import HomeSubHeader from '../homeSubHeader/homeSubHeader';

function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.upperTopContainer}>
          <TouchableOpacity><Text style={styles.upperTitle}>Düzenle</Text></TouchableOpacity>
          <CustomButton onPress={() => Alert.alert('Menu')} />
        </View>
        <Text style={styles.mainTitle}>Sohbetler</Text>
      </View>
      <HomeSubHeader />
    </View>
  );
}

export default HomeHeader;

const styles = StyleSheet.create({
  container: {},
  upperContainer: {
    backgroundColor: '#fff',
    padding: 16,
    paddingBottom: 8,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },

  upperTopContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  upperTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
