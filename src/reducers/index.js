import { combineReducers } from 'redux';
import authentication from '../reducers/authentication.js';
import { routerReducer } from 'react-router-redux';
import login from '../reducers/login.js';
const reducers = {
  login,
  routing: routerReducer,
  authentication
};
module.exports = combineReducers(reducers);
