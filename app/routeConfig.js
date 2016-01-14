export default function(app) {
  const RouterConfig = ($stateProvider) => {
    $stateProvider

      .state('index', {
        abstract: true,
        views: {
          'main': { template: '<ui-view></ui-view>' },
        },
      })

      .state('index.start', { 
        url: '/',
        template: '<a ui-sref="home"><h1>Start</h1></a>',
      })

      .state('index.home', {
        url: '/home',
        template: '<home></home>',
      })

      .state('index.about', {
        url: '/about/:type',
        template: '<about></about>',
      });
  }
  RouterConfig.$inject = ['$stateProvider'];
  return RouterConfig;
}
