import * as types from '../../constants';

export default class HomeController {
  /*@ngInject;*/
  constructor($scope, $ngRedux) {
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
}
