import { combineReducers } from 'redux';
import dataSources from '../reducers/dataSources.js';
import visits from '../reducers/visits.js';
import user from '../reducers/user.js';
import authentication from '../reducers/authentication.js';
import { routerReducer } from 'react-router-redux';
import login from '../reducers/login.js';
const reducers = {
  login,
  routing: routerReducer,
  authentication,
  user,
  visits,
  dataSources
};
module.exports = combineReducers(reducers);
