import { combineReducers } from 'redux';
import userReducer, { cartreducer } from './reducer';

const rootred = combineReducers({
  // cartreducer,
  User: userReducer,
});

export default rootred;
