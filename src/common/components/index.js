/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
import DatePicker from './DatePicker.js';
import Form from './Form.js';
const components = {
  DatePicker,
  Form,
};

module.exports = components;
