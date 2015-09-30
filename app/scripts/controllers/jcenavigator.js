'use strict';

/**
 * @ngdoc function
 * @name jcedevelopApp.controller:JcenavigatorCtrl
 * @description
 * # JcenavigatorCtrl
 * Controller of the jcedevelopApp
 */
angular.module('jcedevelopApp')
  .controller('jceNavigatorCtrl', function ($scope, $location, $anchorScroll, $timeout) {
    $scope.scrollTo = function(index, $event){
    	var old = $location.hash();
    	$location.hash($scope.menuItems[index].linkedId);
    	$anchorScroll();  
    	$location.hash(old);  		
    	$scope.setActive(index);
    	// if(index === 0){
    	// 	if(!$scope.findMeIsOpen){
    	// 		$scope.workExperience.openMe(function(){
    	// 			$scope.findMeIsOpen = true;
    	// 		});

    	// 	}
    	// }
    };
    $scope.showDropDown = false;

    $scope.menuIconClicked = function() {
    	$scope.showDropDown = !$scope.showDropDown;
    };

    $scope.setActive = function(index){
		$scope.menuItems[$scope.activeMenuItem].isActive = false;
		$scope.menuItems[index].isActive = true;
		$scope.activeMenuItem = index;
		if(APP.isMobileView){
			$scope.showDropDown = false;
		}
	};
  });
