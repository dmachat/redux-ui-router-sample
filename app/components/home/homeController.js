import * as types from '../../actions';

DataController.$inject = ['$scope', '$ngRedux'];
export default function DataController($scope, $ngRedux) {
  this.$ngRedux = $ngRedux;

  const disconnect = $ngRedux.connect((state) => {
    return {
      data: state.data.items,
    };
  })(this);

  $scope.$on('$destroy', disconnect);
}
