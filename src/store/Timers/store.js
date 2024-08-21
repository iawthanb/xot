import { combineReducers } from 'redux';
import timerReducer from './reducer';

const rootReducer = combineReducers({
  timer: timerReducer,
});

export default rootReducer;
