import {clearStorage} from '@react-native-khan/helpers';

export const errorHandler = err => {
  switch (err?.attribute?.error) {
    case 'Unauthorized':
      clearStorage();
      break;
    default:
      break;
  }
};
