/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import registerUser from '../actions/registerUser.js';
import logout from '../actions/logout.js';
import loadDataSource from '../actions/loadDataSource.js';
import dataSourceLoaded from '../actions/dataSourceLoaded.js';
import visitDataLoaded from '../actions/visitDataLoaded.js';
import loadVisitData from '../actions/loadVisitData.js';
import dateSelectedForVisits from '../actions/dateSelectedForVisits.js';
import inputValueChange from '../actions/inputValueChange.js';
import authCheck from '../actions/authCheck.js';
import verifyUser from '../actions/verifyUser.js';
import loginPasswordEntered from '../actions/loginPasswordEntered.js';
import loginEmailEntered from '../actions/loginEmailEntered.js';
import userProfileLoaded from '../actions/userProfileLoaded.js';
import loggedIn from '../actions/loggedIn.js';
const actions = {
  loggedIn,
  userProfileLoaded,
  loginEmailEntered,
  loginPasswordEntered,
  verifyUser,
  authCheck,
  inputValueChange,
  dateSelectedForVisits,
  loadVisitData,
  visitDataLoaded,
  dataSourceLoaded,
  loadDataSource,
  logout,
  registerUser
};
module.exports = actions;
