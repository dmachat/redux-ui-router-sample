// Import third party libraries
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router';

// Import config for libraries
import reduxConfig from './reduxConfig';
import routeConfig from './routeConfig';

// Import components
import home from './components/home';
import data from './components/data';

// This is our main angular application with dependencies
const app = angular
  .module('app', [
    uiRouter,
    ngRedux,
    ngReduxUiRouter,
    data,
    home,
  ]);

// Enable HTML5 mode for routes
app.config(['$locationProvider', ($locationProvider) => {
  $locationProvider.hashPrefix('!');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  }); 
}]) 

// Load config for ui-router
app.config(routeConfig(app));

// Load Redux config
app.config(reduxConfig);

export default app;
