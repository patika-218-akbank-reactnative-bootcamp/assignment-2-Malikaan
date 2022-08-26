import * as React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

function ChatItem({data}) {
  const {navigate} = useNavigation();

  const chatItemPressHandler = () => {
    navigate('Chat', {data: data});
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => chatItemPressHandler()}>
      <View style={styles.imageOrb} />
      <View style={styles.rightContainer}>
        <Text style={styles.userName}>{data.reciever.name}</Text>
        <Text>{data.messages[0].text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    padding: 16,
    flexDirection: 'row',
  },
  imageOrb: {
    height: 56,
    width: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 16,
  },
  rightContainer: {
    justifyContent: 'center',
  },
  userName: {
    fontWeight: 'bold',
  },
});
