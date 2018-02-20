

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import { inputValueChange, registerUser } from 'actions';
import { Form } from 'common/components/index';

import {
  LOGIN_EMAIL_ENTERED,
  LOGIN_PASSWORD_ENTERED
} from 'actions/const';

class Register extends React.Component {
  render() {
    const { actions, login } = this.props;
    return (
      <div className="col-md-4">
        <div className="row">
          <form id="registeration-form" className="col-md-12 text-left m-0" data-parsley-validate noValidate>
            <h4>Register</h4>
            <hr />
            <Form.Email
              name={LOGIN_EMAIL_ENTERED}
              label="Email"
              placeholder="Email"
              data-parsley-required-message="Email is required"
              required
              onChange={actions.inputValueChange}/>
            <Form.Password
              name={LOGIN_PASSWORD_ENTERED}
              label="Password"
              placeholder="Password"
              data-parsley-required-message="Password is required"
              required
              onChange={actions.inputValueChange}/>
            <div className="col-md-12 p-0">
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => {
                  if ($('#registeration-form').parsley().validate()) {
                    actions.registerUser(login);
                  }
                }}>
                Register
              </button>
            </div>
          </form>
          <div className="col-md-12  text-center pt-1">
            <h6 className="d-inline-block">
              Already have an Account?
              <Link className="btn btn-link m-0 d-inline-block" to="/login">Login</Link>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

Register.displayName = 'RegisterPage';

Register.propTypes = {
  actions: PropTypes.shape({}),
  login: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
  const props = {
    login: state.login
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { inputValueChange, registerUser};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
