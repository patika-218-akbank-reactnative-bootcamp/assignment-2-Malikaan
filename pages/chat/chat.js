import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import MessageInput from '../../component/messageInput/messageInput';
import MessageItem from '../../component/messageItem/messageItem';

function Chat() {
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: route.params.data.reciever.name});
  }, []);

  const renderMessages = () =>
    route.params.data.messages.map(item => (
      <MessageItem key={item.id} data={item} />
    ));

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContentContainerStyle}
        style={styles.messageContainer}>
        {renderMessages()}
      </ScrollView>
      <MessageInput />
    </View>
  );
}

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageContainer: {
    padding: 24,
    flex: 1,
    marginBottom: 80,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
  },
  scrollViewContentContainerStyle: {alignItems: 'flex-start'},
});
