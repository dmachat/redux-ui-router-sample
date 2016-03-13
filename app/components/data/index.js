import dataController from './dataController';
import dataDirective from './dataDirective';

export default angular

  .module('app.data', [])

  .controller('DataController', dataController)

  .directive('data', dataDirective)
  
  .name;
