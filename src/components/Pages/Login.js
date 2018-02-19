

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import { inputValueChange, authCheck } from 'actions';
import { Form } from 'common/components/index';

import {
    LOGIN_EMAIL_ENTERED,
    LOGIN_PASSWORD_ENTERED
} from 'actions/const';

class Login extends React.Component {

    render() {
        const { actions, login } = this.props;
        const { inputValueChange, authCheck } = actions;
        return (
            <div className="col-md-7">
                <div className="row">
                    <form id="login-form" className="col-md-12 text-left m-0" data-parsley-validate noValidate>
                        <h4>Sign In</h4>
                        <hr />
                        <Form.Email
                            name={LOGIN_EMAIL_ENTERED}
                            label="Email"
                            placeholder="Email"
                            data-parsley-required-message="Email is required"
                            required
                            onChange={inputValueChange}
                        />
                        <Form.Password
                            name={LOGIN_PASSWORD_ENTERED}
                            label="Password"
                            placeholder="Password"
                            data-parsley-required-message="Password is required"
                            required
                            onChange={inputValueChange}
                        />
                        <div className="col-md-12 text-right m-0 p-0">
                            <Link className="btn btn-link pr-0" to="/forgot">Forgot Password?</Link>
                        </div>
                        <div className="col-md-12">
                            <button
                                type="button"
                                className="btn btn-primary btn-block"
                                onClick={() => {
                                    if ($('#login-form').parsley().validate()) {
                                        authCheck(login.email, login.password);
                                    }
                                }
                                }
                            >Sign in</button>
                        </div>
                    </form>
                    <div className="col-md-12 text-center pt-1">
                        <h6 className="d-inline-block">Don&#39;t have an Account?</h6>
                        <Link className="btn btn-link pr-0 d-inline-block" to="/register"> Sign Up </Link>
                    </div>
                </div>
            </div>
        );
    }
}

Login.displayName = 'LoginPage';

Login.propTypes = {
    location: PropTypes.shape({}),
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
    const actions = { inputValueChange, authCheck };
    const actionMap = { actions: bindActionCreators(actions, dispatch) };
    return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
