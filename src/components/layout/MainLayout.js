import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Layout} from 'common/components/index';
// import Notification from 'common/notification/Notification';
import {} from 'actions/index';

class MainLayoutComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {children} = this.props;
    return (
      <div className="container-fluid p-0">
        {/* <Notification/> */}
        <Layout.Header.Main {...this.props} />
        <div className="right-container">
          <div className="off-canvas-wrapper"/>
          <div className="row p-0">
            <div className="col-md-12 p-0">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MainLayoutComponent.displayName = 'MainLayoutComponent';

MainLayoutComponent.propTypes = {
};

function mapStateToProps(state) {
  const props = {
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayoutComponent);
