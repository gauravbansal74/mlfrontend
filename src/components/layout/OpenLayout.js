import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const OpenLayoutComponent = ({children, authentication}) => {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Website Visits</span>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          {
            authentication.loggedIn ? <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Visits</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/data-source">Data Sources</Link>
              </li>
            </ul> : ''
          }
        </div>
      </nav>
      <div className="row justify-content-around" style={{'height': '100%'}}>
        {children}
      </div>
    </div>
  );
};
OpenLayoutComponent.displayName = 'OpenLayoutComponent';
OpenLayoutComponent.propTypes = {};
OpenLayoutComponent.defaultProps = {};
export default OpenLayoutComponent;
