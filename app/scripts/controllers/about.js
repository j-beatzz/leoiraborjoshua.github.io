'use strict';

/**
 * @ngdoc function
 * @name jcedevelopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jcedevelopApp
 */
angular.module('jcedevelopApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
