import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SelectPlugin from 'react-select';
import 'react-select/dist/react-select.css';
import API from 'common/api/data';
import Image from 'common/components/Image';

const GravatarOption = React.createClass({
  propTypes: {
    children: PropTypes.node,
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    isFocused: PropTypes.bool,
    isSelected: PropTypes.bool,
    onFocus: PropTypes.func,
    onSelect: PropTypes.func,
    option: PropTypes.object.isRequired,
  },
  handleMouseDown(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSelect(this.props.option, event);
  },
  handleMouseEnter(event) {
    this.props.onFocus(this.props.option, event);
  },
  handleMouseMove(event) {
    if (this.props.isFocused) return;
    this.props.onFocus(this.props.option, event);
  },
  render() {
    return (
      <div
        className={this.props.className}
        onMouseDown={this.handleMouseDown}
        onMouseEnter={this.handleMouseEnter}
        onMouseMove={this.handleMouseMove}
        title={this.props.option.label}>
        <Image name={this.props.option.label} src="" size="48" />
        {this.props.children}
      </div>
    );
  }
});

const GravatarValue = React.createClass({
  propTypes: {
    children: PropTypes.node,
    placeholder: PropTypes.string,
    value: PropTypes.object
  },
  render() {
    return (
      <div className="Select-value">
        <span className="Select-value-label">
          <Image name={this.props.value.label} size="48" />
          {this.props.children}
        </span>
      </div>
    );
  }
});

class UserSelect extends React.Component {
  constructor(props) {
    super(props);
    this.loadOptions = this.loadOptions.bind(this);
  }
  loadOptions(input, callback) {
    const {modal, getData} = this.props;
    return getData(modal, '', callback);
  }
  render() {
    const {value, multi, selectCallBack, placeholder, label, name} = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <SelectPlugin.Async
          value={value}
          multi={multi}
          optionComponent={GravatarOption}
          valueComponent={GravatarValue}
          loadOptions={this.loadOptions}
          placeholder={placeholder}
          isLoading
          {...this.props}
          onChange={(data) => selectCallBack(data)}
          />
      </div>
    );
  }
}

UserSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  offline: PropTypes.bool,
  onSelectChange: PropTypes.func,
  getData: PropTypes.func.isRequired,
  value: PropTypes.string,
  multi: PropTypes.bool.isRequired,
  modal: PropTypes.string.isRequired,
};

const getData = (modal, input) => API.getData(modal, input).then(res => (
  {
    options: res.results ? res.results : [],
    complete: false
  })).catch(() => ({
    options: [],
    complete: false
  }));

// Input Blur for Password input field to check validation and all
const selectChange = (that, name, data) => function (dispatch) {
  if (that.props.multi) {
    dispatch({type: name, parameter: data});
  } else if (data) {
    dispatch({type: name, parameter: data.value});
  } else {
    dispatch({type: name, parameter: ''});
  }
};

const mapDispatchToProps = dispatch => ({
  getData: (modal, name, data) => getData(modal, name, data)
});
export default connect(null, mapDispatchToProps)(UserSelect);
