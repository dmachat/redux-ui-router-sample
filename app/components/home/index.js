/**
 * Home component
 * This file returns an angular module for the home component.
 */

import HomeController from './homeController';
import homeFilter from './homeFilter';
import template from './home.html';

export default angular

  .module('app.home', [])

  .component('home', {
    template,
    controller: HomeController,
  })

  .filter('homeFilter', homeFilter)
  
  .name;
