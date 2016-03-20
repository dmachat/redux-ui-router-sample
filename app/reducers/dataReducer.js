/**
 * Reducers update a specific prop in the application state, by operating
 * after the action which describes what to change.
 * To add a new action, add it to the switch statement in the dataReducer function
 *
 * @example
 * case NEW_ACTION_CONSTANT:
 *   return assign({}, state, {
 *     stateVariable: action.var,
 *   });
 *
 * To add a new reducer, add another file like this to the reducers folder, and
 * add it in rootReducer.js.
 */

import * as types from '../constants';

// Set up an initial state to hold data. Use count to assign ids so we can
// remove items from the collection
const initialState = {
  items: [],
  count: 0,
}

export default function(state = initialState, action) {
  switch(action.type) {
    // Assign the next id and add the item to data collection
    case types.ADD_DATA:
      return angular.extend({}, state, {
        count: state.count + 1,
        items: state.items.concat(
          angular.extend({}, action.data, {
            id: state.count + 1,
          })
        ),
      });
    // Remove item from collection by item by overwriting with a filtered copy
    case types.REMOVE_DATA:
      return angular.extend({}, state, {
        items: state.items.filter((item) => {
          return item.id !== action.data;
        }),
      });
    default:
      return state;
  }
}
