/**
 * Home component
 * This file returns an angular module for the home directive.
 */

import homeDirective from './homeDirective';
import HomeController from './homeController';
import homeFilter from './homeFilter';

export default angular

  .module('app.home', [])

  .controller('HomeController', HomeController)

  .directive('home', homeDirective)

  .filter('homeFilter', homeFilter)
  
  .name;
