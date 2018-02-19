

import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'parsleyjs';

class TextArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {label, name, value, placeholder, maxlength, requiredMessage, required, disabled, onChange} = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <textarea
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          className="form-control"
          data-parsley-maxlength={maxlength}
          data-parsley-required-message={requiredMessage}
          required={required}
          disabled={disabled}
          style={{height: '130px'}}
          onChange={(e) => {
            $(e.target).parsley().validate();
            onChange($(e.target).attr('name'), $(e.target).val());
            $(e.target).parent().addClass('was-validated');
          }}
				/>
      </div>
    );
  }
}

TextArea.displayName = 'CommonFormTextArea';
TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  requiredMessage: PropTypes.string,
  maxlength: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool
};

export default connect(null, null)(TextArea);
