import { VISIT_DATA_LOADED } from './const';

function action(parameter) {
  return { type: VISIT_DATA_LOADED, parameter };
}

module.exports = action;
