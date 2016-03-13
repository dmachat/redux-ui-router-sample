import homeDirective from './homeDirective';
import homeController from './homeController';
import homeFilter from './homeFilter';

export default angular

  .module('app.home', [])

  .controller('HomeController', homeController)

  .directive('home', homeDirective)

  .filter('homeFilter', homeFilter)
  
  .name;
