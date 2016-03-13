import actionTrigger from '../../actions/data';
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

DataController.prototype.submit = function() {
  this.$ngRedux.dispatch(actionTrigger(types.ADD_DATA, this.form));
  this.form = {};
}

DataController.prototype.remove = function(id) {
  this.$ngRedux.dispatch(actionTrigger(types.REMOVE_DATA, id));
}
