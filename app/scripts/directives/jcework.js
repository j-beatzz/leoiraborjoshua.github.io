'use strict';

/**
 * @ngdoc directive
 * @name jcedevelopApp.directive:jceWork
 * @description
 * # jceWork
 */
angular.module('jcedevelopApp')
  .directive('jceWork', function ($timeout) {
    return {
      templateUrl: 'views/jcework.html',
      restrict: 'E',
      scope: {
      	service: '='
      },
      link: function($scope, element) {
        //console.log($scope.service.getExpericeJSON());
        $scope.experienceJSON = $scope.service.getExpericeJSON();
        var vertLine = $('.vert_line');
        var experienceContainer = $('.experience-container');
        var animationComplete = false;

        $scope.setVerticalLineHeight = function(){
        	var length = $scope.experienceJSON.length;
        	var height = experienceContainer.css('height');
        	height = parseInt(height.replace('px', ''));
        	var lineHeight = length * 250;
        	vertLine.css('height', 1.5 * lineHeight + 'px');
        	//$('.vert_linegrunt').css('margin-top', '-' + (height + 25) + 'px');
        };

        $(window).scroll(function(){
        	if(animationComplete === false){
        		var topMenuHeight = $('.jce-nav').height();
	        	var fromTop = $(this).scrollTop() + (2 * topMenuHeight);
		 	    // Get id of current scroll item
			    if (element.offset().top < fromTop){
			       vertLine.slideDown(500);
			       var containers = experienceContainer.find('.jce-experience-item');
			       for(var i = 0; i < containers.length; i++){
		       			containers.eq(i).delay(500).show(1000);
			       }
			       animationComplete = true;
			    }
        	}
		});
	}
    };
  });
