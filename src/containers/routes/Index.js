

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Layout from 'components/Layout/OpenLayout';
import Index from 'components/Pages/Index';

import {loadVisitData} from 'actions/index';

class IndexComponent extends React.Component {
  render() {
    return (
      <Layout authentication={this.props.authentication}>
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
  const actions = {loadVisitData};
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexComponent);
