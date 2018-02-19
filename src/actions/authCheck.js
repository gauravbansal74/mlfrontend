import { AUTH_CHECK } from './const';

function action(parameter) {
  return { type: AUTH_CHECK, parameter };
}

module.exports = action;
