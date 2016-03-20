import * as types from '../../actions';

export default class HomeController {
  /*@ngInject;*/
  constructor($scope, $ngRedux) {
    const disconnect = $ngRedux.connect((state) => {
      return {
        data: state.data.items,
      };
    })(this);

    $scope.$on('$destroy', disconnect);
  }
}
