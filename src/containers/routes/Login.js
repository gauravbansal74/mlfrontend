import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';

import OpenLayout from 'components/Layout/OpenLayout';
import Login from 'components/Pages/Login';
// import {Notification} from 'common/index';

class LoginComponent extends React.Component {
  render() {
    return (
      <OpenLayout authentication={this.props.authentication} logout={()=>{}}>
        {/* <Notification /> */}
        <Login {...this.props} />
      </OpenLayout>
    );
  }
}

LoginComponent.displayName = 'RoutesLogin';

LoginComponent.propTypes = {
};

function mapStateToProps(state) {
  const props = {
    login: state.login,
    authentication: state.authentication
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
