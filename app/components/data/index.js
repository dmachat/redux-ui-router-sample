/**
 * Data component
 * This file returns an angular module for the data component.
 */

import DataController from './dataController';
import template from './data.html';

export default angular

  .module('app.data', [])

  .component('data', {
    template,
    controller: DataController,
  })
  
  .name;
