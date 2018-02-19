

import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import moment from 'moment';
import 'parsleyjs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelector = ({label, name, value, placeholder, helpText, required, onChange}) => (
  <div className="form-group">
    <label className="d-flex" htmlFor={name}>{label}</label>
    <DatePicker
      className="form-control"
      id={name}
      name={name}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      disabledKeyboardNavigation
      dropdownMode="select"
      dateFormatCalendar="MMMM"
      placeholderText={placeholder}
      selected={moment(value)}
      required={required}
      onChange={(date) => {
        onChange(name, date);
      }}
			/>
    <small className="form-text text-muted">{helpText}</small>
  </div>
	);

DateSelector.displayName = 'CommonDateSelector';
DateSelector.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  helpText: PropTypes.string,
  required: PropTypes.bool,
};

export default DateSelector;
