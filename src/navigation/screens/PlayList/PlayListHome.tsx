import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function PlayListHome() {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
}

function PlayList() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={PlayListHome} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default PlayList;
