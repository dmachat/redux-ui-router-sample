import reducers from './reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

store.$inject = ['$ngReduxProvider'];
export default function store($ngReduxProvider) {
  $ngReduxProvider.createStoreWith(
    reducers,
    ['ngUiRouterMiddleware', thunk, logger]
  );
}
