import {addNotification as notify} from 'reapop';
import API from 'common/api/visits';
import {VISIT_DATA_LOADED} from './const';

function action(date) {
  return function (dispatch) {
    return API.loadVisitData(date).then((res) => {
      dispatch({type: VISIT_DATA_LOADED, parameter: res})
      return res;
    }).catch((res) => {
      dispatch({type: VISIT_DATA_LOADED, parameter: []})
      if (res.status !== 0) {
        dispatch(notify({message: JSON.parse(res.responseText).message, status: res.status}));
      } else {
        dispatch(notify({message: 'SOMETHING_WENT_WRONG', status: '400'}));
      }
    });
  };
}

module.exports = action;
