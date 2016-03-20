export default function home() {
  return {
    controller: 'HomeController',
    controllerAs: 'controller',
    template: require('./home.html'),
  };
}
