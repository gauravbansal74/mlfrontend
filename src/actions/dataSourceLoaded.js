import { DATA_SOURCE_LOADED } from './const';

function action(parameter) {
  return { type: DATA_SOURCE_LOADED, parameter };
}

module.exports = action;
