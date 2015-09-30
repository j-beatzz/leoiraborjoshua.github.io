'use strict';

/**
 * @ngdoc function
 * @name jcedevelopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jcedevelopApp
 */
angular.module('jcedevelopApp')
  .controller('MainCtrl', function ($scope, Workexperience) {
    $scope.workExperience = Workexperience;
    $scope.menuItems = [{
      'title': 'About Me',
      'linkedId': 'about-me',
      'toClick': true,
      'activeType': 3
    }, {
      'title': 'Projects',
      'linkedId': 'my-side-projects',
      'toClick': false,
      'activeType': 2
    }, {
      'title': 'Experience',
      'linkedId': 'jce-work-experience',
      'toClick': false,
      'activeType': 3
    }, {
      'title': 'Toolkit',
      'linkedId': 'my-tool-kit',
      'toClick': false,
      'activeType': 2
    }];
    
    $scope.findMeIsOpen = false;
  });
