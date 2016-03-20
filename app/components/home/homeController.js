import * as types from '../../constants';

HomeController.$inject = ['$scope', '$ngRedux'];
export default function HomeController($scope, $ngRedux) {
  // bind redux state to this component, which subsribes to updates like a
  // one way data binding
  const disconnect = $ngRedux.connect((state) => {
    return {
      data: state.data.items,
    };
  })(this);

  // remove the redux data binding when component is destroyed
  $scope.$on('$destroy', disconnect);
}
