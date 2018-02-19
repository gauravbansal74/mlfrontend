import { combineReducers } from 'redux';
import user from '../reducers/user.js';
import authentication from '../reducers/authentication.js';
import { routerReducer } from 'react-router-redux';
import login from '../reducers/login.js';
const reducers = {
  login,
  routing: routerReducer,
  authentication,
  user
};
module.exports = combineReducers(reducers);
