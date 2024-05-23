import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from './rootReducer';
import {rootSaga} from './rootSaga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: [],
        ignoredPaths: [],
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
