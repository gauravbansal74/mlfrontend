import { LOGIN_PASSWORD_ENTERED } from './const';

function action(parameter) {
  return { type: LOGIN_PASSWORD_ENTERED, parameter };
}

module.exports = action;
