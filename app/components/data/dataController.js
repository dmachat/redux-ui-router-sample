import actionTrigger from '../../actions/data';
import * as types from '../../actions';

export default class DataController {
  /*@ngInject;*/
  constructor($scope, $ngRedux) {
    this.$ngRedux = $ngRedux;

    const disconnect = $ngRedux.connect((state) => {
      return {
        data: state.data.items,
      };
    })(this);

    $scope.$on('$destroy', disconnect);
  }

  submit() {
    this.$ngRedux.dispatch(actionTrigger(types.ADD_DATA, this.form));
    this.form = {};
  }

  remove(id) {
    this.$ngRedux.dispatch(actionTrigger(types.REMOVE_DATA, id));
  }
}
