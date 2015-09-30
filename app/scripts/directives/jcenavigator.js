'use strict';

/**
 * @ngdoc directive
 * @name jcedevelopApp.directive:jceNavigator
 * @description
 * # jceNavigator
 */
angular.module('jcedevelopApp')
  .directive('jceNavigator', function () {
    return {
	  templateUrl: 'views/jcenavigator.html',
	  restrict: 'E',
	  controller: 'jceNavigatorCtrl',
	  link: function ($scope, element, attrs) {
	  	$scope.jceBrand = 'LEO-Irabor Joshua';
	  	var setView = function(){
	    	var width = $(window).width();
	    	if (width <= 748){
				$scope.isMobileView = true;	    	
	    	} else {
	    		$scope.isMobileView = false;	    	
	    	}

	    	if(width <= 500){
	    		$scope.jceBrand = 'LEO-Irabor';
	    	} else {
	    		$scope.jceBrand = 'LEO-Irabor Joshua';
	    	}

	    };
	    setView();

	  	for(var i = 0; i < $scope.menuItems.length; i++){
	    	if(i === 0){
	    		$scope.menuItems[i].isActive = true;
	    		$scope.activeMenuItem = i;
	    	} else {
	    		$scope.menuItems[i].isActive = false;
	    	}
	    }

	    $scope.updateMobileMenu = function(){
	    	$scope.activeType = $scope.menuItems[$scope.activeMenuItem].activeType;
	    }


	    $(window).resize(function(){
	    	setView();
	    	$scope.$apply();
	    });
	    $scope.activeSection = 0;
	    $scope.activeType = 3;
	    $scope.isMobile = false;
		var topMenuHeight = element.outerHeight() + 15,
			linkedIds = [],
			lastId;
		for(var i = 0; i < $scope.menuItems.length; i++){
			linkedIds[i] = '#' + $scope.menuItems[i].linkedId;
		}

		$(window).scroll(function(){
		   // Get container scroll position
		   var fromTop = $(this).scrollTop() + (2 * topMenuHeight);
		   // Get id of current scroll item
		   var cur = $.map(linkedIds, function(id, n){
		     if ($(id).offset().top < fromTop)
		       return n;
		   });
		   // Get the id of the current element

		   //Need to get the height of last section
		   var lsHeight = $(linkedIds[linkedIds.length-1]).outerHeight();
		   if($(this).scrollTop() + $(this).height() >= $(document).height() - lsHeight){
		   		cur = $scope.menuItems.length-1;
		   } else {
		   		cur = cur[cur.length-1];
		   }
		    if (lastId !== cur) {
		       lastId = cur;
		       // Set/remove active class
		       $scope.setActive(cur);
		       $scope.updateMobileMenu();
		       $scope.$apply();
			}
		});
	  }
    };
  });
