import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationRef, forFade} from '@react-native-khan/helpers';

import {InitScreen} from '@screens';
// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const DashboardScreen = () => {
//   return (
//     <Tab.Navigator
//       tabBar={props => <BottomNavbar {...props} type="2" />}
//       initialRouteName="Home"
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Tab.Screen
//         name="home"
//         component={HomeScreen}
//         options={{
//           icon: 'home',
//         }}
//       />
//       <Tab.Screen
//         name="lorem"
//         component={LoremScreen}
//         options={{
//           icon: 'columns',
//         }}
//       />
//       <Tab.Screen
//         name="chat"
//         component={ChatScreen}
//         options={{
//           icon: 'message-circle',
//         }}
//       />
//       <Tab.Screen
//         name="profile"
//         component={ProfileScreen}
//         options={{
//           icon: 'users',
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

const Routers = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: forFade,
        }}>
        <Stack.Screen name="init" component={InitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
