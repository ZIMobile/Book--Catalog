import {combineReducers, applyMiddleware} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import {catalogReducer, authReducer} from './reducers';
import {persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['isLoggedIn'],
};

const rootReducer = combineReducers({
  catalog: catalogReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
