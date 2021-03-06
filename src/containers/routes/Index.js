

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Layout from 'components/Layout/OpenLayout';
import Index from 'components/Pages/Index';

import {loadVisitData, logout} from 'actions/index';

class IndexComponent extends React.Component {

  componentDidMount() {
    const {actions} = this.props;
    actions.loadVisitData();
  }

  render() {
    return (
      <Layout authentication={this.props.authentication} logout={this.props.actions.logout}>
        <Index {...this.props} />
      </Layout>
    );
  }
}

IndexComponent.displayName = 'RoutesIndex';

IndexComponent.propTypes = {
};

function mapStateToProps(state) {
  const props = {
    user: state.user,
    authentication: state.authentication
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {loadVisitData, logout};
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexComponent);
