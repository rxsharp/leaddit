'use strict';

describe('Controller: MyapiCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularApp'));

  var MyapiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyapiCtrl = $controller('MyapiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyapiCtrl.awesomeThings.length).toBe(3);
  });
});
