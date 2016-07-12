class widgetSuggestionsController {
  constructor($http) {
    this.name = 'widgetSuggestions';

    let REQ = {
      url: '/1.1/users/suggestions/governo.json',
      method: 'GET'
    };

    $http(REQ)
      .success((data) => {
        this.suggestions = data.users;
      });
  }
}

widgetSuggestionsController.$inject = ['$http'];

export default widgetSuggestionsController;
