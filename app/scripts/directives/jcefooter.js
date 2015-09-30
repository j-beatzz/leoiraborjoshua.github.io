'use strict';

/**
 * @ngdoc directive
 * @name jcedevelopApp.directive:jceFooter
 * @description
 * # jceFooter
 */
angular.module('jcedevelopApp')
  .directive('jceFooter', function () {
    return {
      templateUrl: 'views/jcefooter.html',
      restrict: 'E',
      link: function($scope, element, attrs) {
        $scope.currentYear = new Date().getFullYear();
      }
    };
  });
