class widgetTrendsController {
  constructor($scope, $http) {
    this.name = 'widgetTrends';

    var REQ = {
      url: '/1.1/trends/place.json?id=23424768',
      method: 'GET'
    };

    $http(REQ)
      .success(function(data){
        console.log('Data: ', data);
        $scope.User = data;
      })
      .error(function(err){
        console.log('Erro: ', err);
      });
  }
}

widgetTrendsController.$inject = ['$scope', 'http'];

export default widgetTrendsController;
