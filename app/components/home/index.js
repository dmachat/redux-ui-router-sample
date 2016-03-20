import homeController from './homeController';
import homeFilter from './homeFilter';
import template from './home.html';

export default angular

  .module('app.home', [])

  .component('home', {
    template,
    controller: homeController,
  })

  .filter('homeFilter', homeFilter)
  
  .name;
