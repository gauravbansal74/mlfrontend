import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';

import OpenLayout from 'components/Layout/OpenLayout';
import Register from 'components/Pages/Register';

class RegisterComponent extends React.Component {
  render() {
    return (
      <OpenLayout authentication={this.props.authentication} logout={()=>{}}>
        <Register {...this.props} />
      </OpenLayout>
    );
  }
}

RegisterComponent.displayName = 'RoutesRegister';

RegisterComponent.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
