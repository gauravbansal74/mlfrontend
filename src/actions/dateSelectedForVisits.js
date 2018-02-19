import { DATE_SELECTED_FOR_VISITS } from './const';

function action(parameter) {
  return { type: DATE_SELECTED_FOR_VISITS, parameter };
}

module.exports = action;
