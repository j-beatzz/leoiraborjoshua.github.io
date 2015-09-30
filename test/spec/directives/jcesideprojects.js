'use strict';

describe('Directive: jceSideProjects', function () {

  // load the directive's module
  beforeEach(module('jcedevelopApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<jce-side-projects></jce-side-projects>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the jceSideProjects directive');
  }));
});
