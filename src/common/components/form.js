

import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'parsleyjs';

const Form = {};

// >>>>>>>>>>>>>> Form Text Starts here >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Form.Text = ({name, label, value, helpText}) => (
  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        {
          label !== '' ? <label htmlFor={name}>{label}</label> : ''
        }
      </div>
    </div>
    <div className="col-md-6 text-secondary">
      {value}
    </div>
    <small className="form-text text-muted">{helpText}</small>
  </div>
);

Form.Text.displayName = 'CommonFormText';
Form.Text.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  helpText: PropTypes.string
};
// >>>>>>>>>>>>>>>>>> Form Input Ends Here >>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>> Form Input Starts here >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Form.Input = ({name, label, value, placeholder, maxLengthMessage, typeMessage, maxLength, required, disabled, helpText, onChange}) => (
  <div className="form-group">
    {
      label !== '' ? <label htmlFor={name}>{label}</label> : ''
    }
    <input
      id={name}
      name={name}
      value={value}
      type="text"
      placeholder={placeholder}
      className="form-control"
      data-parsley-required-message={`${label} is required`}
      data-parsley-maxlength={maxLength}
      data-parsley-maxlength-message={maxLengthMessage}
      data-parsley-type-message={typeMessage}
      required={required}
      disabled={disabled}
      onChange={(e) => {
        if ($(e.target).parsley().validate()) {
          onChange($(e.target).attr('name'), $(e.target).val());
        } else {
          $(e.target).parent().addClass('was-validated');
        }

      }}
      onBlur={(e) => {
        if ($(e.target).parsley().validate()) {
          onChange($(e.target).attr('name'), $(e.target).val());
        } else {
          $(e.target).parent().addClass('was-validated');
        }
      }}/>
    <small className="form-text text-muted">{helpText}</small>
  </div>
);

Form.Input.displayName = 'CommonFormInput';
Form.Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  typeMessage: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  maxLengthMessage: PropTypes.string,
  helpText: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};
// >>>>>>>>>>>>>>>>>> Form Input Ends Here >>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>> Form Password starts here >>>>>>>>>>>>>>>>>>>>>>>>>
Form.Password = ({label, name, placeholder, requiredMessage, typeMessage, minLength, maxLengthMessage, helpText, required, onChange}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      type="password"
      placeholder={placeholder}
      className="form-control"
      data-parsley-minlength={minLength}
      data-parsley-maxlength="50"
      data-parsley-required-message={`${label} is required`}
      data-parsley-minlength-message={`${label} is too short. It should have 6 characters or more.`}
      data-parsley-maxlength-message={`${label} is too long. It should have 50 characters or fewer.`} //
      data-parsley-type-message={typeMessage}
      required={required}
      onChange={(e) => {
        if ($(e.target).parsley().validate()) {
          onChange($(e.target).attr('name'), $(e.target).val());
        } else {
          $(e.target).parent().addClass('was-validated');
        }
      }}
      onBlur={(e) => {
        if ($(e.target).parsley().validate()) {
          onChange($(e.target).attr('name'), $(e.target).val());
        } else {
          $(e.target).parent().addClass('was-validated');
        }
      }}/>
    <small className="form-text text-muted">{helpText}</small>
  </div>);

Form.Password.displayName = 'CommonFormPassword';
Form.Password.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  requiredMessage: PropTypes.string,
  typeMessage: PropTypes.string,
  minLength: PropTypes.number,
  maxLengthMessage: PropTypes.string,
  helpText: PropTypes.string,
  required: PropTypes.bool,
};
// >>>>>>>>>>>>>>>> Form Password ends here >>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>> Form Email starts here >>>>>>>>>>>>>>>>>>>>>>>>>
Form.Email = ({label, name, value, placeholder, requiredMessage, typeMessage, maxlength, maxLengthMessage, helpText, required, onChange, disabled}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      defaultValue={value}
      type="email"
      placeholder={placeholder}
      className="form-control"
      data-parsley-maxlength={maxlength}
      data-parsley-required-message={`${label} is required`}
      data-parsley-maxlength-message={maxLengthMessage}
      data-parsley-type-message={typeMessage}
      required={required}
      disabled={disabled}
      onChange={e => (
        $(e.target).parsley().validate() === true ? onChange($(e.target).attr('name'), $(e.target).val()) : $(e.target).parent().addClass('was-validated')
      )}
      onBlur={e => (
        $(e.target).parsley().validate() === true ? onChange($(e.target).attr('name'), $(e.target).val()) : $(e.target).parent().addClass('was-validated')
      )}/>
    <small className="form-text text-muted">{helpText}</small>
  </div>);

Form.Email.displayName = 'CommonFormEmail';
Form.Email.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  requiredMessage: PropTypes.string,
  value: PropTypes.string,
  typeMessage: PropTypes.string,
  maxlength: PropTypes.string,
  maxLengthMessage: PropTypes.string,
  helpText: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool
};
// >>>>>>>>>>>>>>>> Form Email Ends here >>>>>>>>>>>>>>>>>>>>>>>>>

export default Form;
