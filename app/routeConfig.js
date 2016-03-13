export default function(app) {
  const RouterConfig = ($stateProvider) => {
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
  RouterConfig.$inject = ['$stateProvider'];
  return RouterConfig;
}
