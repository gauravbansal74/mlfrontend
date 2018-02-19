import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';

import OpenLayout from 'components/Layout/OpenLayout';
import DataSource from 'components/Pages/DataSource';
// import {Notification} from 'common/index';

import {loadDataSource} from 'actions';

class RoutesDataSource extends React.Component {

  componentDidMount() {
    const {actions} = this.props;
    actions.loadDataSource();
  }

  render() {
    return (
      <OpenLayout authentication={this.props.authentication}>
        {/* <Notification /> */}
        <DataSource {...this.props} />
      </OpenLayout>
    );
  }
}

RoutesDataSource.displayName = 'RoutesDataSource';

RoutesDataSource.propTypes = {};

function mapStateToProps(state) {
  const props = {
    dataSources: state.dataSources,
    authentication: state.authentication
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {loadDataSource};
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutesDataSource);
