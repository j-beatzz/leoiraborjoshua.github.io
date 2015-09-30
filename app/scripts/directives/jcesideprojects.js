'use strict';

/**
 * @ngdoc directive
 * @name jcedevelopApp.directive:jceSideProjects
 * @description
 * # jceSideProjects
 */
angular.module('jcedevelopApp')
  .directive('jceSideProjects', function ($timeout, AppManager) {
    return {
      templateUrl: 'views/jcesideprojects.html',
      restrict: 'E',
      scope: {
      	service: '='
      },
      link: function($scope, element) {
      	var seqArray = [];
      	
      	var fadeIn = function(p, index){
        	$timeout(function(){
        		p.eq(seqArray[index]).css('opacity', '1');
        		index++;
        		if(index < p.length){
        			$timeout(function(){
        				fadeIn(p, index);
        			}, 250)
        		}
        	}, 250);
        }

        function showProjects(){
          $timeout(function() {
            var projectsContainer = element.find('.side-projects-container');
            var row = projectsContainer.find('.row');
            var p = projectsContainer.find('.project');

            if (AppManager.getViewPort()) {
              for (var i = 0; i < p.length; ++i) {
                p.eq(i).css('opacity', '1');
              }
            } else {
              fadeIn(p, 0);
            }
          }, 500);
        };

        $scope.service.getSideProjectsJSON(2, function(data){
        	$scope.sideProjectsJSON = data;
        	seqArray = $scope.service.getRndSeq();
        	showProjects();
        });
      }
    };
  });
