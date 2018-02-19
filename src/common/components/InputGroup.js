

import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'parsleyjs';

const InputGroup = ({label, name, placeholder, requiredMessage, typeMessage, maxlength, maxLengthMessage, helpText, required, onChange}) => (
  <div className="mb-3">
    <label htmlFor={name}>{label}</label>
    <div className="input-group">
      <input
        id={name}
        name={name}
        type="text"
        placeholder={placeholder}
        className="form-control"
        required
        onChange={e => (
						$(e.target).parsley().validate() === true ? onChange($(e.target).attr('name'), $(e.target).val()) :
						$(e.target).parent().addClass('was-validated')
					)}
        onBlur={e => (
						$(e.target).parsley().validate() === true ? onChange($(e.target).attr('name'), $(e.target).val()) :
						$(e.target).parent().addClass('was-validated')
					)}
				/>
      <span className="input-group-addon">.offcampus4u.com</span>
    </div>
  </div>
	);

InputGroup.displayName = 'CommonFormInputGroup';
InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  requiredMessage: PropTypes.string,
  typeMessage: PropTypes.string,
  maxlength: PropTypes.string,
  maxLengthMessage: PropTypes.string,
  helpText: PropTypes.string,
  required: PropTypes.bool,
};

export default InputGroup;
