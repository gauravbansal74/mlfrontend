import { LOGIN_EMAIL_ENTERED } from './const';

function action(parameter) {
  return { type: LOGIN_EMAIL_ENTERED, parameter };
}

module.exports = action;
