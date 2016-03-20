import actionTrigger from '../../actions';
import * as types from '../../constants';

export default class DataController {
  /*@ngInject;*/
  constructor($scope, $ngRedux) {
    this.$ngRedux = $ngRedux;

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

  // submit and reset the form by sending an ADD_DATA action
  submit() {
    this.$ngRedux.dispatch(actionTrigger(types.ADD_DATA, this.form));
    this.form = {};
  }

  // remove an item from the list by sending a REMOVE_DATA action
  remove(id) {
    this.$ngRedux.dispatch(actionTrigger(types.REMOVE_DATA, id));
  }
}
