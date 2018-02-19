import {addNotification as notify} from 'reapop';

import API from 'common/api/register';
import {LOGGED_IN, USER_PROFILE_LOADED} from './const';

function action(email, password) {
  return function (dispatch) {
    return API.loginAccount(email, password).then((res) => {
      dispatch({type: USER_PROFILE_LOADED, parameter: res.results});
      dispatch({type: LOGGED_IN, parameter: true});
      return res;
    }).catch((res) => {
      dispatch({type: LOGGED_IN, parameter: false});
      if (res.status !== 0) {
        dispatch(notify({message: JSON.parse(res.responseText).message, status: res.status}));
      } else {
        dispatch(notify({message: 'SOMETHING_WENT_WRONG', status: '400'}));
      }
    });
  };
}

module.exports = action;
