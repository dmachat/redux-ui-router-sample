/**
 * Actions change things in your application.
 * In redux, actions are the only way to interact with your application state,
 * and are descriptions of what should change. This gaurantees that your state
 * is up to date.
 *
 * To add a new action:
 * 1) import your constant
 * 2) Add a function like this:
 *    export function newAction(var) {
 *      return {
 *        type: NEW_ACTION_CONSTANT,
 *        var: var,
 *      };
 *    }
 * 3) (optional) Add an async function like this:
 *    export function asyncNewAction(var) {
 *      return (dispatch) => {
 *        // Do async stuff here
 *        return dispatch(newAction(var));
 *      };
 *    }
 *
 *    If the regular action is only used by the async action, you can
 *    remove the export from regular action.
 */
import * as types from '../constants';

// A reuseable basic action which just passes type and data to the reducers
export default function actionTrigger(type, data) {
  return { type, data };
}
