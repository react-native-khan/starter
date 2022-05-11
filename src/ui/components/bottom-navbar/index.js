import React from 'react';
import {BottomNavbar1, BottomNavbar2} from './type';

export const BottomNavbar = props => {
  switch (props.type) {
    case '2':
      return <BottomNavbar2 {...props} />;
    default:
      return <BottomNavbar1 {...props} />;
  }
};
