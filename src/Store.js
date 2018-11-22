import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';

const configureStore = createStore(reducers, {}, applyMiddleware(thunk, createLogger));

export default configureStore;
