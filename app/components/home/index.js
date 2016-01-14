export default angular

  .module('app.home', [])

  .controller('HomeController', require('./homeController'))

  .directive('home', require('./homeDirective'))
  
  .name;
