import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {View, StyleSheet, Pressable, Text, Platform} from 'react-native';
import {colors, rootStyles} from '@styles';

export const BottomNavbar2 = props => {
  return (
    <View style={styles.bottomNavContainer}>
      {props.state.routes.map((route, index) => {
        const {options} = props.descriptors[route.key];
        const isFocused = props.state.index === index;
        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: false,
          });
          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate({name: route.name});
          }
        };
        return (
          <Pressable
            key={`${route.key}-bottom-navigation`}
            onPress={onPress}
            style={styles.navItemContainer}>
            <Icon
              size={20}
              name={options.icon}
              color={isFocused ? colors.primary : 'gray'}
            />
            {options.title && (
              <Text style={[styles.navItemText, options.titleStyle]}>
                {options.title}
              </Text>
            )}
          </Pressable>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  bottomNavContainer: {
    marginTop: -20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingBottom: Platform.OS === 'ios' ? 16 : 0,
    ...rootStyles.shadow,
  },
  navItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    flex: 1,
  },
  navItemText: {
    fontSize: 10,
  },
});
