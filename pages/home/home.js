import * as React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

import ChatItem from '../../component/chatItem/chatItem';
import HomeHeader from '../../component/homeHeader/homeHeader';

const chatList = [
  {
    id: '1',
    reciever: {
      id: 'user1',
      name: 'Ömer',
    },
    messages: [
      {
        text: 'nasılsın?',
        dateTime: 'Fri Aug 26 2022 01:52:53 GMT+0300 (GMT+03:00)',
      },
      {
        text: 'Merhaba keyfin yerindedir umarım',
        dateTime: 'Fri Aug 26 2022 01:53:53 GMT+0300 (GMT+03:00)',
      },
    ],
  },
  {
    id: '2',
    reciever: {
      id: 'user2',
      name: 'Aybuke',
    },
    messages: [
      {
        text: 'Selam naber?',
        dateTime: 'Fri Aug 26 2022 01:53:53 GMT+0300 (GMT+03:00)',
      },
    ],
  },
  {
    id: '3',
    reciever: {
      id: 'user1',
      name: 'Ömer',
    },
    messages: [
      {
        text: 'nasılsın?',
        dateTime: 'Fri Aug 26 2022 01:52:53 GMT+0300 (GMT+03:00)',
      },
      {
        text: 'Merhaba keyfin yerindedir umarım',
        dateTime: 'Fri Aug 26 2022 01:53:53 GMT+0300 (GMT+03:00)',
      },
    ],
  },
  {
    id: '4',
    reciever: {
      id: 'user2',
      name: 'Aybuke',
    },
    messages: [
      {
        text: 'Selam naber?',
        dateTime: 'Fri Aug 26 2022 01:53:53 GMT+0300 (GMT+03:00)',
      },
    ],
  },{
    id: '5',
    reciever: {
      id: 'user1',
      name: 'Ömer',
    },
    messages: [
      {
        text: 'nasılsın?',
        dateTime: 'Fri Aug 26 2022 01:52:53 GMT+0300 (GMT+03:00)',
      },
      {
        text: 'Merhaba keyfin yerindedir umarım',
        dateTime: 'Fri Aug 26 2022 01:53:53 GMT+0300 (GMT+03:00)',
      },
    ],
  },
  {
    id: '6',
    reciever: {
      id: 'user2',
      name: 'Aybuke',
    },
    messages: [
      {
        text: 'Selam naber?',
        dateTime: 'Fri Aug 26 2022 01:53:53 GMT+0300 (GMT+03:00)',
      },
    ],
  },{
    id: '7',
    reciever: {
      id: 'user1',
      name: 'Ömer',
    },
    messages: [
      {
        text: 'nasılsın?',
        dateTime: 'Fri Aug 26 2022 01:52:53 GMT+0300 (GMT+03:00)',
      },
      {
        text: 'Merhaba keyfin yerindedir umarım',
        dateTime: 'Fri Aug 26 2022 01:53:53 GMT+0300 (GMT+03:00)',
      },
    ],
  },
  {
    id: '8',
    reciever: {
      id: 'user2',
      name: 'Aybuke',
    },
    messages: [
      {
        text: 'Selam naber?',
        dateTime: 'Fri Aug 26 2022 01:53:53 GMT+0300 (GMT+03:00)',
      },
    ],
  },{
    id: '9',
    reciever: {
      id: 'user1',
      name: 'Ömer',
    },
    messages: [
      {
        text: 'nasılsın?',
        dateTime: 'Fri Aug 26 2022 01:52:53 GMT+0300 (GMT+03:00)',
      },
      {
        text: 'Merhaba keyfin yerindedir umarım',
        dateTime: 'Fri Aug 26 2022 01:53:53 GMT+0300 (GMT+03:00)',
      },
    ],
  },
  {
    id: '10',
    reciever: {
      id: 'user2',
      name: 'Aybuke',
    },
    messages: [
      {
        text: 'Selam naber?',
        dateTime: 'Fri Aug 26 2022 01:53:53 GMT+0300 (GMT+03:00)',
      },
    ],
  },
];

function Home({}) {

  const renderChats = () =>
    chatList.map(item => <ChatItem key={item.id} data={item} />);

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {renderChats()}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingBottom: 240,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
    paddingTop: 16,
  },
});
