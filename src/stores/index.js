import {combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {global} from '@reducers';
import {configureStore} from '@reduxjs/toolkit';
import {loggerMiddleware} from '@middleware';
const globalPersistConfig = {
  key: 'global',
  storage: AsyncStorage,
  blacklist: ['loading'],
};

const reducer = combineReducers({
  global: persistReducer(globalPersistConfig, global),
});

export const store = configureStore({
  reducer,
  middleware: [loggerMiddleware, thunkMiddleware],
});

export const persistor = persistStore(store);
