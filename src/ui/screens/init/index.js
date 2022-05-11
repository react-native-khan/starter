import React from 'react';
import {Layout} from '@react-native-khan/components';
import {setLoading} from '@react-native-khan/helpers';
import {styles} from './styles';
import {Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {api} from '@api';
export const InitScreen = () => {
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(setLoading());
    api.getData();
    api.postData({
      username: 'Farkhan25',
      password: 'fone azmi',
    });
  };

  return (
    <Layout dark style={styles.container}>
      <TouchableOpacity onPress={submit}>
        <Text>Hello World</Text>
      </TouchableOpacity>
    </Layout>
  );
};
