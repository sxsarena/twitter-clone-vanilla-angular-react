import angular from 'angular';

export default angular
  .module('challenge')
  .component('profilePhotosVideos',{
    templateUrl: 'profilePhotosVideos.html',
    controller: profilePhotosVideosController,
    bindings: {
    }
  });

profilePhotosVideos.$inject = ['$scope'];

function profilePhotosVideos($scope) {
  let vm = this;
}
