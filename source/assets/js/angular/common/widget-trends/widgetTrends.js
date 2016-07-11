import angular from 'angular';

export default angular
  .module('challenge')
  .component('widgetTrends',{
    templateUrl: 'widgetTrends.html',
    controller: widgetTrendsController,
    bindings: {
    }
  });

widgetTrendsController.$inject = ['$scope'];

function widgetTrendsController($scope) {
  let vm = this;
}
