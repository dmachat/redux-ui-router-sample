/**
 * Create the store with middlewares:
 *
 * redux-thunk: which allows us to do asyncronous things in the actions.
 * ngUiRouter: intercepts route change methods from ui-router.
 * devToolsExtension: use the chrome browser extension
 */

import reducers from './reducers/rootReducer';
import thunk from 'redux-thunk';

store.$inject = ['$ngReduxProvider'];
export default function store($ngReduxProvider) {
  $ngReduxProvider.createStoreWith(
    reducers,
    ['ngUiRouterMiddleware', thunk],
    [window.devToolsExtension ? window.devToolsExtension() : f => f]
  );
}
