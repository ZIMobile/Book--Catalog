import {combineReducers, applyMiddleware} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import {catalogReducer} from './reducers';

const rootReducer = combineReducers({
  catalog: catalogReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
