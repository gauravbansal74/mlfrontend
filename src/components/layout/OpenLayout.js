import React from 'react';
import PropTypes from 'prop-types';

const OpenLayoutComponent = ({...props}) => {
  const {children} = props;
  return (
    <div className="container-fluid p-0">
      <div className="row justify-content-around" style={{'height': '100%'}}>
        <div className="col-md-6 p-0">
          <div className="open-layout-left">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="#">atDesk.co</a>
            </nav>
          </div>
        </div>
        <div className="col-md-6 p-0">
          <div className="open-layout-right row align-items-center justify-content-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
OpenLayoutComponent.displayName = 'OpenLayoutComponent';
OpenLayoutComponent.propTypes = {
  // otherComponent: PropTypes.func.isRequired
};
OpenLayoutComponent.defaultProps = {};
export default OpenLayoutComponent;
