import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SelectPlugin from 'react-select';
import 'react-select/dist/react-select.css';
import API from 'common/api/data';

const SELECT_DATA = {
  gender: [
    {
      value: 'Male',
      label: 'Male'
    },
    {
      value: 'Female',
      label: 'Female'
    }
  ],

  founded: [
    {
      value: 2019,
      label: '2019'
    },
    {
      value: 2018,
      label: '2018'
    },
    {
      value: 2017,
      label: '2017'
    },
    {
      value: 2016,
      label: '2016'
    }
  ],
  interviewType: [
    {
      value: 'Screening',
      label: 'Screening'
    },
  ]
};

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.loadOptions = this.loadOptions.bind(this);
  }

  loadOptions(input, callback) {
    const {modal, offline, value, getData} = this.props;
    if (offline) {
      return Promise.resolve({
        options: SELECT_DATA[modal],
        complete: true
      });
    }
    if (input) {
      return
    }
    return getData(modal, '', callback);

  }
  render() {
    const {multi, onSelectChange, placeholder, label, name, value} = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <SelectPlugin.Async
          defaultValue={value}
          multi={multi}
          loadOptions={this.loadOptions}
          placeholder={placeholder}
          isLoading
          {...this.props}
          onChange={onSelectChange.bind(this, this, this.props.name)}
          />
      </div>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  offline: PropTypes.bool,
  onSelectChange: PropTypes.func.isRequired,
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
  onSelectChange: (that, name, data) => {
    dispatch(selectChange(that, name, data));
  },
  getData: (modal, name, data) => getData(modal, name, data)
});
export default connect(null, mapDispatchToProps)(Select);
