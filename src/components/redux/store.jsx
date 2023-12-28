// store.js
import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/reducers';

const rootReducer = combineReducers({
  counter: counterReducer
});

const store = createStore(rootReducer);

export default store;
