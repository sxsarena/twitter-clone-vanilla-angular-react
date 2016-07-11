import angular from 'angular';

export default angular
  .module('challenge')
  .component('profileNumbers',{
    templateUrl: 'profileNumbers.html',
    controller: profileNumbersController,
    bindings: {
    }
  });

profileNumbersController.$inject = ['$scope'];

function profileNumbersController($scope) {
  let vm = this;
}
