import * as React from 'react';

import {StyleSheet, Text,  View} from 'react-native';

function MessageItem({data}) {
  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>{data.text}</Text>
      <Text style={styles.date}>
        {new Date(data.dateTime).getHours()}:
        {new Date(data.dateTime).getMinutes()}
      </Text>
    </View>
  );
}

export default MessageItem;

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
  messageText: {
    fontWeight: '600',
  },
  date: {
    textAlign: 'right',
  },
});
