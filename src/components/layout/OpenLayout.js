import React from 'react';
import PropTypes from 'prop-types';

const OpenLayoutComponent = ({...props}) => {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Website Visits</span>
        <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarNav" ariaControls="navbarNav" ariaExpanded="false" ariaLabel="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Visits</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Data Sources</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row justify-content-around" style={{'height': '100%'}}>
        {props.children}
      </div>
    </div>
  );
};
OpenLayoutComponent.displayName = 'OpenLayoutComponent';
OpenLayoutComponent.propTypes = {};
OpenLayoutComponent.defaultProps = {};
export default OpenLayoutComponent;
