import angular from 'angular';

export default angular
  .module('challenge')
  .component('widgetSuggestions',{
    templateUrl: 'widgetSuggestions.html',
    controller: widgetSuggestionsController,
    bindings: {
    }
  });

widgetSuggestionsController.$inject = ['$scope'];

function widgetSuggestionsController($scope) {
  let vm = this;
}
