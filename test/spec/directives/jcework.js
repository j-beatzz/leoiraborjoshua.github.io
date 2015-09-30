'use strict';

describe('Directive: jceWork', function () {

  // load the directive's module
  beforeEach(module('jcedevelopApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<jce-work></jce-work>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the jceWork directive');
  }));
});
