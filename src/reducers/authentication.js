/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {LOGGED_IN} from 'actions/const';

const initialState = {
  loggedIn: false
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    case LOGGED_IN: {
      // Modify next state depending on the action and return it
      const nextState = state;
      nextState.loggedIn = action.parameter;
      return Object.assign({}, nextState);
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
