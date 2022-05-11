import {BASE_URL} from '@env';
import {errorHandler, successHandler} from './handler';
import {Request} from '@react-native-khan/helpers';

const request = new Request();

request.setHandler({
  errorHandler,
  successHandler,
});

const getData = () => {
  return request.create({
    url: `${BASE_URL}/guest/getMerchants`,
    method: 'GET',
  });
};

const postData = payload => {
  return request.create({
    url: `${BASE_URL}/login`,
    method: 'POST',
    body: payload,
  });
};

export const api = {
  getData,
  postData,
};
