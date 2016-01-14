export default angular

  .module('app.about', [])

  .controller('AboutController', require('./aboutController'))

  .directive('about', require('./aboutDirective'))
  
  .name;
