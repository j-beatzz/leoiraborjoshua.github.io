'use strict';

describe('Controller: JcenavigatorCtrl', function () {

  // load the controller's module
  beforeEach(module('jcedevelopApp'));

  var JcenavigatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JcenavigatorCtrl = $controller('JcenavigatorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
