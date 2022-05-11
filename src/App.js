import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {logger} from '@react-native-khan/helpers';
export const App = () => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => {
        logger('Hello world');
      }}>
      <Text>Hello world</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
