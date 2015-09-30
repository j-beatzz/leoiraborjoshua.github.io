'use strict';

/**
 * @ngdoc directive
 * @name jcedevelopApp.directive:jceFindMeBtn
 * @description
 * # jceFindMeBtn
 */
angular.module('jcedevelopApp')
  .directive('jceFindMeBtn', function () {
    return {
			restrict: 'C',
			link: function($scope, element){
				$scope.findMeIsOpen = false;
				var openMe = function(){
					$scope.findMeIsOpen = true;
				};

				var closeMe = function(){
					$scope.findMeIsOpen = false;
				};

				$scope.workExperience.closeMe(closeMe);
				element.on('click', function(){
					if($scope.findMeIsOpen){
						//close
						$scope.workExperience.closeMe(closeMe);
					} else {
						//open
						$scope.workExperience.openMe(openMe);
					}
				});

				$(window).resize(function(){
					if($scope.findMeIsOpen){
						$scope.workExperience.openMe(openMe);	
					} else {
						$scope.workExperience.closeMe(closeMe);
					}
				});
			}
		};
  });
