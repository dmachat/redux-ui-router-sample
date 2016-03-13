import { combineReducers } from 'redux';

// reducer for the router included
import { router } from 'redux-ui-router';

// our custom data reducer for the bar data points
import data from './reducers/data';

export default combineReducers({ router, data });
