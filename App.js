import * as React from 'react';

import {Alert, StyleSheet, View} from 'react-native';

import Chat from './pages/chat/chat';
import CustomButton from './component/button/button';
import Home from './pages/home/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerRight: () => (
              <View style={styles.headerRightContainer}>
                <CustomButton onPress={() => Alert.alert('Calling')} />

                <CustomButton onPress={() => Alert.alert('Video Call')} />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: 'row',
  },
});
