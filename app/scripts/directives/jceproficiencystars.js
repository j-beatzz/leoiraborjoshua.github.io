'use strict';

/**
 * @ngdoc directive
 * @name jcedevelopApp.directive:jceProficiencyStars
 * @description
 * # jceProficiencyStars
 */
angular.module('jcedevelopApp')
  .directive('jceProficiencyStars', function () {
    return {
      template: '<span></span>',
      restrict: 'E',
      scope: {
      	rating: '@'
      },
      link: function postLink($scope, element) {
      	var html = '';
      	var fullRating = 5;
      	var rating = $scope.rating.split('.');
      	for(var i = 0; i  < parseInt(rating[0]); i++){
      		html += '<i class="fa fa-star"></i> ';
      		fullRating--;
      	}
      	if(rating[1]){
      		html+= '<i class="fa fa-star-half-o"></i> ';
      		fullRating--;
      	}

      	if(fullRating > 0){
      		for(var j = 0; j < fullRating; j++){
      			html+= '<i class="fa fa-star-o"></i> ';	
      		}
      	}

      	element.html(html);
      }
    };
  });
