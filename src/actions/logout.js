import {addNotification as notify} from 'reapop';
import {LOGOUT, LOGGED_IN} from './const';
import {removeCookies} from 'common/cookies';

function action(parameter) {
  return function (dispatch) {
    removeCookies();
    dispatch({type: LOGOUT, parameter});
    dispatch({type: LOGGED_IN, parameter: false});
    dispatch(notify({message: 'Logout successfully', status: '200'}));

  };
}

module.exports = action;
