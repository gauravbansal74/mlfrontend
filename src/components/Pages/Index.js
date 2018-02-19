

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import { inputValueChange,loadVisitData } from 'actions';
import {DatePicker} from 'common/components/index';

import {
  DATE_SELECTED_FOR_VISITS,
} from 'actions/const';

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // selectedDate: (new Date()).getTime()
    };
    this.handleDate = this.handleDate.bind(this);
  }

  handleDate(name, date) {
    this.setState({selectedDate: (new Date(date._d)).getTime()});
    const {actions} = this.props;
    actions.loadVisitData((new Date(date._d)).getTime());
  }

  render() {
    const {visits} = this.props;
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
            {
              visits.length > 0 ? <table className="table table-striped">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">website</th>
                  <th scope="col">Visits</th>
                </tr>
                </thead>
                <tbody>
                {
                  visits.map((visit, index) => (
                    <tr key={visit._id}>
                      <th scope="row">{index+1}</th>
                      <td>{visit.website ? visit.website : visit._id}</td>
                      <td>{visit.visits}</td>
                    </tr>
                  ))
                }
                </tbody>
              </table> : "No Records"
            }

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
    visits: state.visits
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { inputValueChange, loadVisitData };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
