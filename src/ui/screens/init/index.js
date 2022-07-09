import React from 'react';
import {Layout, setLoading} from '@react-native-khan/components';
import {styles} from './styles';
import {Text, TouchableOpacity} from 'react-native';
import {api} from '@services';
import {useDispatch} from 'react-redux';
export const InitScreen = () => {
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(setLoading());
    api.geocode();
  };

  return (
    <Layout dark style={styles.container}>
      <TouchableOpacity onPress={submit}>
        <Text>Hello World</Text>
      </TouchableOpacity>
    </Layout>
  );
};
