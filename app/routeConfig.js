/**
 * Add a few basic routes to ui-router for our components
 */
export default function(app) {
  RouterConfig.$inject = ['$stateProvider'];
  function RouterConfig($stateProvider) {
    $stateProvider
      .state('index', {
        abstract: true,
        views: {
          'main': { template: '<ui-view></ui-view>' },
        },
      })

      .state('index.home', {
        url: '/',
        template: '<home></home>',
      })

      .state('index.data', {
        url: '/data',
        template: '<data></data>',
      });
  }
  return RouterConfig;
}
