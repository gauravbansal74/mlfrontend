import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class AuthCheckComponent extends React.Component {
  componentWillReceiveProps(nextProps) {
    const {authentication, router} = nextProps;
    const location = router.getCurrentLocation();
    if (authentication.loggedIn !== true) {
      router.push({pathname: '/login', query: {redirect: location.pathname}});
    }
  }
  render() {
    const {authentication, children} = this.props;
    if (authentication.loggedIn === true) {
      return children;
    }
    return null;
  }
}

AuthCheckComponent.propTypes = {
  router: PropTypes.shape({}),
  authentication: PropTypes.shape({}),
  location: PropTypes.shape({}),
  children: PropTypes.shape({})
};

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps(state) {
  return {
    authentication: state.authentication,
    location: state.location
  };
}

export default connect(mapStateToProps, null)(AuthCheckComponent);
