import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Notification from 'common/notification/index';
const OpenLayoutComponent = ({children, authentication, logout}) => {
  return (
    <div className="container-fluid p-0">
      <Notification />
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <span className="navbar-brand mb-0 h1">Website Visits</span>
          {
            authentication.loggedIn ? <ul className="navbar-nav justify-content-end">
              <li className="nav-item">
                <Link className="nav-link" to="/">Visits</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/data-source">Data Sources</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => { logout(); }} href="#">
                  Logout
                </a>
              </li>
            </ul> : ''
          }
      </nav>
      <div className="row justify-content-around" style={{'height': '100%'}}>
        {children}
      </div>
    </div>
  );
};
OpenLayoutComponent.displayName = 'OpenLayoutComponent';
OpenLayoutComponent.propTypes = {
  children: PropTypes.shape({}),
  authentication: PropTypes.shape({}),
  logout: PropTypes.shape({}),
};
OpenLayoutComponent.defaultProps = {};
export default OpenLayoutComponent;
