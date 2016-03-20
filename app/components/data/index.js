/**
 * Data component
 * This file returns an angular module for the data directive.
 */

import dataController from './dataController';
import dataDirective from './dataDirective';

export default angular

  .module('app.data', [])

  .controller('DataController', dataController)

  .directive('data', dataDirective)
  
  .name;
