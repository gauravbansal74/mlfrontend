function action(type, parameter) {
  return function (dispatch) {
    dispatch({type, parameter});
  };
}

module.exports = action;
