import React from 'react';
import PropTypes from 'prop-types';

const OpenLayoutComponent = ({...props}) => {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Website Visits</span>
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
