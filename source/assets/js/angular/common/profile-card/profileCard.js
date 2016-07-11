import angular from 'angular';

export default angular
  .module('challenge')
  .component('profileCard',{
    templateUrl: 'profileCard.html',
    controller: profileCardController,
    bindings: {
    }
  });

profileCardController.$inject = ['$scope'];

function profileCardController($scope) {
  let vm = this;
}
