import angular from 'angular';

export default angular
  .module('challenge')
  .component('profileFollowers',{
    templateUrl: 'profileFollowers.html',
    controller: profileFollowersController,
    bindings: {
    }
  });

profileFollowersController.$inject = ['$scope'];

function profileFollowersController($scope) {
  let vm = this;
}
