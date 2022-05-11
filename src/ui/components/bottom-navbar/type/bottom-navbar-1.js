import React from 'react';
import {width} from '@react-native-khan/helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import {colors, rootStyles} from '@styles';

export const BottomNavbar1 = props => {
  return (
    <View style={styles.bottomNavContainer}>
      {props.state.routes.map((route, index) => {
        const {options} = props.descriptors[route.key];
        const isFocused = props.state.index === index;
        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
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
              <Text
                style={[
                  options.titleStyle,
                  styles.navItemText,
                  isFocused && styles.selectedNavItemText,
                ]}>
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
    ...rootStyles.shadow,
    position: 'absolute',
    bottom: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 50,
    left: width / 6,
    right: width / 6,
  },
  navItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    flex: 1,
  },
  navItemText: {
    fontSize: 10,
    color: 'gray',
  },
  selectedNavItemText: {
    color: colors.primary,
  },
});
