about.$inject = [];
export default function about() {
  return {
    controller: 'AboutController',
    controllerAs: 'controller',
    template: require('./about.html'),
  };
}
