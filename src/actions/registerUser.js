import {addNotification as notify} from 'reapop';

import API from 'common/api/register';

function action(data) {
  return function (dispatch) {
    return API.createAccount(data).then((result, messageResponse, response) => {
      dispatch(notify({message: result.message, status: response.status}));
      return res;
    }).catch((res) => {
      if (res.status !== 0) {
        dispatch(notify({message: JSON.parse(res.responseText).message, status: res.status}));
      } else {
        dispatch(notify({message: 'SOMETHING_WENT_WRONG', status: '400'}));
      }
    });
  };
}

module.exports = action;
