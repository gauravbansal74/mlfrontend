

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import { inputValueChange } from 'actions';
import {DatePicker} from 'common/components/index';

import {
  DATE_SELECTED_FOR_VISITS,
} from 'actions/const';

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDate: (new Date()).getTime()
    };
    this.handleDate = this.handleDate.bind(this);
  }

  handleDate(name, date) {
    this.setState({selectedDate: (new Date(date._d)).getTime()});
  }

  render() {
    const { actions} = this.props;
    const {selectedDate} = this.state;
    return (
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-12">
            <DatePicker
              label="Select Date"
              name={DATE_SELECTED_FOR_VISITS}
              placeholder="Click to select a Date"
              dropdownMode="select"
              value={selectedDate}
              disabled
              onChange={this.handleDate}/>
          </div>
          <div className="col-md-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">website</th>
                  <th scope="col">Visits</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

IndexPage.displayName = 'IndexPage';

IndexPage.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  const props = {
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { inputValueChange };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
