'use strict';

/**
 * @ngdoc directive
 * @name jcedevelopApp.directive:jceTookKit
 * @description
 * # jceTookKit
 */
angular.module('jcedevelopApp')
	.directive('jceHover', function(){ 	
  	return {
	  	restrict: 'A',
	  	scope: {
	  		color: '@'
	  	},
	  	link: function($scope, elem){
	  		$scope.defaultColor = '#CCCCCC';
	  		elem.mouseenter(function(){
	  			elem.css('color', $scope.color);
	  		});

	  		elem.mouseleave(function(){
	  				elem.css('color', $scope.defaultColor);
	  		});
	  	}
	  };
  })
  .directive('jceToolKit', function () {
    return {
      templateUrl: 'views/jcetoolkit.html',
      restrict: 'E',
      scope: {
      	service: '='
      },
      link: function($scope) {
        $scope.toolKitJSON = [];
        var tools = $scope.service.getToolKitJSON();
        var j = 0;
        $scope.toolKitJSON[j] = [];
        for(var i = 0; i < tools.length; ++i) {
        	if(i > 0 && i % 6 === 0){
        		j++;
        		$scope.toolKitJSON[j] = [];
        	}
        	var index = i % 6;
        	$scope.toolKitJSON[j][index] = tools[i];
        }
      }
    };
  });
