'use strict';

describe('Service: workExperience', function () {

  // load the service's module
  beforeEach(module('jcedevelopApp'));

  // instantiate service
  var workExperience;
  beforeEach(inject(function (_workExperience_) {
    workExperience = _workExperience_;
  }));

  it('should do something', function () {
    expect(!!workExperience).toBe(true);
  });

});
