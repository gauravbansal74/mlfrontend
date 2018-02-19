import { USER_PROFILE_LOADED } from './const';

function action(parameter) {
  return { type: USER_PROFILE_LOADED, parameter };
}

module.exports = action;
