import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router';
import reduxConfig from './reduxConfig';

import home from './components/home';
import data from './components/data';

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

app.config(require('./routeConfig')(app));

app.config(reduxConfig);

export default app;
