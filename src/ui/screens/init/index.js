import React from 'react';
import {Layout} from '@react-native-khan/components';
import {styles} from './styles';
import {Text, TouchableOpacity} from 'react-native';
import {setLoading} from '@actions';
import {useDispatch} from 'react-redux';

export const InitScreen = () => {
  const dispatch = useDispatch();
  return (
    <Layout dark style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(setLoading())}>
        <Text>Hello World</Text>
      </TouchableOpacity>
    </Layout>
  );
};
