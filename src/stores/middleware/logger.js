// import {logger} from '@react-native-khan/helpers';
export const loggerMiddleware = store => next => action => {
  let result = next(action);
  return result;
};
