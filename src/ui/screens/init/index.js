import React from 'react';
import {Layout, AppBar, AppBarButton} from '@react-native-khan/components';
import {styles} from './styles';
import {colors} from '@styles';
import {Text, TouchableOpacity} from 'react-native';
import {setLoading} from '@actions';
import {useDispatch} from 'react-redux';

export const InitScreen = () => {
  const dispatch = useDispatch();
  return (
    <Layout
      dark
      AppBar={
        <AppBar
          leftMenu={<AppBarButton color={colors.black0} />}
          titleColor={colors.black0}
          title="Init"
          background="white"
        />
      }
      style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(setLoading())}>
        <Text>Hello World</Text>
      </TouchableOpacity>
    </Layout>
  );
};
