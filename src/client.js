import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import {LOGGED_IN, USER_PROFILE_LOADED} from 'actions/const';
import {verifyUser} from 'actions';
import configureStore from 'stores';


import AuthCheckComponent from './components/route/AuthenticatedRoute';
import UnAuthCheckComponent from './components/route/UnauthenticatedRoute';

const store = configureStore(() => {});
const history = syncHistoryWithStore(browserHistory, store);

// Check the token from cookies and validate if token is valid.. Do auto login
const userData = verifyUser();
userData.then((res) => {
  store.dispatch({type: USER_PROFILE_LOADED, parameter: res.results});
  store.dispatch({type: LOGGED_IN, parameter: true});
}).catch(() => {
  store.dispatch({type: LOGGED_IN, parameter: false});
});

// Router for application Level
render(
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" name="Home">
        <Route component={UnAuthCheckComponent}>
          <Route
            path="/login"
            name="Login"
            getComponent={(location, cb) => {
              require.ensure([], (require) => {
                cb(null, require('./containers/routes/Login').default);
              }, 'login');
            }}/>
        </Route>

        <Route name="AuthCheck" component={AuthCheckComponent}>
          <Route path="" name="Home">
            <IndexRoute
              name="Dashboard"
              getComponent={(location, cb) => {
                require.ensure([], (require) => {
                  cb(null, require('./containers/routes/Index').default);
                }, 'index');
              }}/>
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

