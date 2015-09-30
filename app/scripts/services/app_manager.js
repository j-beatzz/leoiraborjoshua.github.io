'use strict';

angular.module('jcedevelopApp')
  .service('AppManager', function AppManager() {
  	var AppManager = function() {
  		this.app = window.APP;
  	};

  	/*
		Set to true for mobile view and false for desktop view
  	 */
  	AppManager.prototype.setViewPort = function(boolean) {
  		this.app.isMobileView = boolean;
  	}

  	/*
		Returns true for mobile view and false for desktop view
  	 */
  	AppManager.prototype.getViewPort = function() {
  		return this.app.isMobileView;
  	}

  	return new AppManager();
  });