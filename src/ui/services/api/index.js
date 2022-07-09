// import {BASE_URL} from '@env';
import {errorHandler, successHandler} from './handler';
import {Request} from '@react-native-khan/helpers';

const request = new Request();

request.setHandler({
  errorHandler,
  successHandler,
});

const geocode = () => {
  return request.create({
    url: 'https://geocode.xyz/-8.0777957,113.2513554?geoit=json',
    method: 'GET',
    // disableLog: true,
  });
};

export const api = {
  geocode,
};
