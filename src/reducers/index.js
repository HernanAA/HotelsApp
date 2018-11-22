import { combineReducers } from 'redux';
import HotelsReducer from './HotelsReducer'

export default combineReducers({
  hotels: HotelsReducer
});