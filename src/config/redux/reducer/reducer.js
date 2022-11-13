import {combineReducers} from 'redux';
import globalReducer from './globalReducer';
import userReducer from './userReducer';
import presenceReducer from './presenceReducer';

const reducer = combineReducers({
  globalReducer,
  userReducer,
  presenceReducer,
});

export default reducer;
