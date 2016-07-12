import WidgetSuggestionsModule from '../../source/assets/js/angular/common/widget-suggestions/widgetSuggestions'
import WidgetSuggestionsController from '../../source/assets/js/angular/common/widget-suggestions/widgetSuggestions.controller';
import WidgetSuggestionsComponent from '../../source/assets/js/angular/common/widget-suggestions/widgetSuggestions.component';
import WidgetSuggestionsTemplate from '../../source/assets/js/angular/common/widget-suggestions/widgetSuggestions.html';

describe('BDD - Angular - Common - WidgetSuggestions', () => {
  let $rootScope, makeController, $http;

  beforeEach(window.module(WidgetSuggestionsModule));
  beforeEach(inject((_$rootScope_, _$http_) => {
    $rootScope = _$rootScope_;
    $http = _$http_;
    makeController = () => {
      return new WidgetSuggestionsController();
    };
  }));

  describe('Module', () => {

  });

  describe('Controller', () => {
    // controller specs
    it('has a name property', () => {
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {

  });

  describe('Component', () => {
    let component = WidgetSuggestionsComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(WidgetSuggestionsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(WidgetSuggestionsController);
    });
  });
});
