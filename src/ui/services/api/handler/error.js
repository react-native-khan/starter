import {clearStorage} from '@react-native-khan/helpers';

export const errorHandler = err => {
  // console.log('errorHandler');
  switch (err?.attribute?.error) {
    case 'Unauthorized':
      clearStorage();
      break;
    default:
      break;
  }
};
