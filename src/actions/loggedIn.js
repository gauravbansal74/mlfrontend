import { LOGGED_IN } from './const';

function action(parameter) {
  return { type: LOGGED_IN, parameter };
}

module.exports = action;
