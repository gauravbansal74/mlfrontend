import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

import reducers from '../reducers';

const reduxStore = () => {

  const store = createStore(
      reducers,
      // initialState,
      compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default reduxStore;
