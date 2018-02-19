/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  loggedIn,
  userProfileLoaded,
  loginEmailEntered,
  loginPasswordEntered,
  authCheck
} from '../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, login, authentication} = this.props;
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.shape({
    loggedIn: PropTypes.func.isRequired,
    userProfileLoaded: PropTypes.func.isRequired,
    loginEmailEntered: PropTypes.func.isRequired,
    loginPasswordEntered: PropTypes.func.isRequired,
    authCheck: PropTypes.func.isRequired
  }),
  login: PropTypes.shape({}),
  authentication: PropTypes.shape({})
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    login: state.login,
    authentication: state.authentication
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    loggedIn,
    userProfileLoaded,
    loginEmailEntered,
    loginPasswordEntered,
    authCheck
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
