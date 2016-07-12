import WidgetTrendsModule from '../../source/assets/js/angular/common/widget-trends/widgetTrends'
import WidgetTrendsController from '../../source/assets/js/angular/common/widget-trends/widgetTrends.controller';
import WidgetTrendsComponent from '../../source/assets/js/angular/common/widget-trends/widgetTrends.component';
import WidgetTrendsTemplate from '../../source/assets/js/angular/common/widget-trends/widgetTrends.html';

describe('BDD - Angular - Common - WidgetTrends', () => {
  let $rootScope, makeController, $http;

  beforeEach(window.module(WidgetTrendsModule));
  beforeEach(inject((_$rootScope_, _$http_) => {
    $rootScope = _$rootScope_;
    $http = _$http_;
    makeController = () => {
      return new WidgetTrendsController();
    };
  }));

  describe('Module', () => {

  });

  describe('Controller', () => {
    // controller specs
    it('has a name property', () => {
      let controller = makeController();
      console.log(controller);
      console.log('entrou');
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {

  });

  describe('Component', () => {
    let component = WidgetTrendsComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(WidgetTrendsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(WidgetTrendsController);
    });
  });
});
