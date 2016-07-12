class widgetTrendsController {
  constructor($http) {
    this.name = 'widgetTrends';

    var REQ = {
      url: '/1.1/trends/place.json?id=23424768',
      method: 'GET'
    };

    $http(REQ)
      .success((data) => {
        this.trends = data[0].trends;
      });
  }
}

widgetTrendsController.$inject = ['$http'];

export default widgetTrendsController;
