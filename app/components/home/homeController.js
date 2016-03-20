import * as types from '../../actions';

HomeController.$inject = ['$scope', '$ngRedux'];
export default function HomeController($scope, $ngRedux) {
  const disconnect = $ngRedux.connect((state) => {
    return {
      data: state.data.items,
    };
  })(this);

  $scope.$on('$destroy', disconnect);
}
