/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {
  LOGIN_EMAIL_ENTERED,
  LOGIN_PASSWORD_ENTERED} from 'actions/const';

const initialState = {
  email: '',
  password: ''
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    case LOGIN_EMAIL_ENTERED: {
      // Modify next state depending on the action and return it
      const nextState = state;
      nextState.email = action.parameter;
      return Object.assign({}, nextState);
    }
    case LOGIN_PASSWORD_ENTERED: {
      // Modify next state depending on the action and return it
      const nextState = state;
      nextState.password = action.parameter;
      return Object.assign({}, nextState);
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
