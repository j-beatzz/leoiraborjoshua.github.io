'use strict';

/**
 * @ngdoc service
 * @name jcedevelopApp.workExperience
 * @description
 * # workExperience
 * Service in the jcedevelopApp.
 */
angular.module('jcedevelopApp')
  .service('Workexperience', function Workexperience() {
    var MyWorkExperience = function(){
    	this.getExpericeJSON = function(){
    		function bold(phrase){
    			return phrase.bold();
    		}

    		return [{
                'company': 'Evertz Microsystems',
                'position': 'Student Design Engineer',
                'tasks': ['Worked with other team members in the advancement of DreamCatcher web – a web application for the company’s instant replay system.',
                'Built a notification manager module so that other widgets in the DreamCatcher web application can notify users of various events.',
                'Built a system health monitoring widget which works with data from Graphite to present information about the health of the DreamCatcher system using D3 and BackboneJS',
                'Built a testing widget through which test scripts can be uploaded and run while providing real-time feedback on the success of the tests using WebSocket Technology.']
            }, {
    			'company': 'Genesys',
    			'position': 'Web Developer',
    			'tasks': ['Worked with other team members in the production an AngularJS based front-end-framwork to help make web development easier for the developers of the company.',
    			'Wrote Grunt tasks to generate the documentation for the framework.',
    			'Built the Journey Timeline web application along with other team members. It is an AngularJS based web application that helps customers manage their various tasks.',
    			'Implemented an internationalization feature that was meant to be compatible with both BackboneJS and AngularJS web applications at the same time',
    			'Implemented Bug fixes on one of the company\'s BackboneJS web applications which helped to improve the loading time of the application.',
    			'Learnt about Test driven development using Karma.']
    		}, {
    			'company': 'uMentioned',
    			'position': 'Android Developer',
    			'tasks': ['Successfully developed the uMentioned android application in collaboration with other developer',
    			'Implemented MIXPANEL and FLURRY analytics for gathering information about the usage of the application from its users.',
    			'Added the ability to invite people to the uMentioned network from the contact list of its users.', 
    			'Meticulously developed fixes to bugs on the application which doubled the performance of the application.',
    			'Developed various activities on the application which made the application more attractive to the users.']
    		}, {
    			'company': 'Roomi',
    			'position': 'Web Developer',
    			'tasks': ['Assisted in the development of the company’s social platform which helps users is search of roommates to get matched with others with similar preferences using Ruby on Rails.',
    			'Successfully integrated the facebook login feature to enable users of the social platform to sign up and login using their facebook accounts.']
    		}, {
    			'company': 'Juk',
    			'position': 'Web Developer',
    			'tasks': ['Developed the website of the company using HTML, CSS, PHP and JavaScript within five weeks.',
    			'Set up the database of the company for managing its mailing list.',
    			'Implemented the MAILCHIMP API for its email marketing strategy which has proved to be very productive.']
    		}];
    	};

    	this.getRndSeq = function(){
    		return [0, 3, 4, 5, 2, 1];
    	};

    	this.getToolKitJSON = function(){
    		return [{
    			'skill': 'HTML5',
    			'image': 'fa fa-html5',
    			'hightlightColor': '#CC5200',
    			'proficiency': 5
    		}, {
    			'skill': 'CSS3',
    			'image': 'fa fa-css3',
    			'hightlightColor': '#5C5CFF',
    			'proficiency': 5
    		},{
    			'skill': 'JavaScript',
    			'image': 'icon-javascript',
    			'hightlightColor': '#FFFF00',
    			'proficiency': 4,
    		}, {
    			'skill': 'Ruby on Rails',
    			'image': 'icon-ruby-on-rails-alt',
    			'hightlightColor': '#FF0000',
    			'proficiency': 3
    		}, {
    			'skill': 'Java',
    			'image': 'icon-java-bold',
    			'hightlightColor': '#FF9900',
    			'proficiency': 3.5
    		}, {
    			'skill': 'C Sharp',
    			'image': 'icon-csharp',
    			'hightlightColor': '#D1C2B2',
    			'proficiency': 3.5
    		}, {
    			'skill': 'C plus plus',
    			'image': 'icon-cplusplus',
    			'hightlightColor': '#944DFF',
    			'proficiency': 3
    		}, {
    			'skill': 'Android',
    			'image': 'fa fa-android',
    			'hightlightColor': '#339933',
    			'proficiency': 3.5
    		}, {
    			'skill': 'PHP',
    			'image': 'icon-php',
    			'hightlightColor': '#944DFF',
    			'proficiency': 3
    		}, {
    			'skill': 'Hardware',
    			'image': 'fa fa-plug',
    			'hightlightColor': '#D1C2B2',
    			'proficiency': 3.5
    		}];
    	};

    	this.getSideProjectsJSON = function(itemsPerRow, callback){
    		var json = [{
    			title: 'Pave',
    			description: 'A time management android application intended to improve productivity. Its main features '   +
                'include a timer for keeping track of time spent on activities, a progress provider for giving feedback to '+
                'users about how well or how close they are to achieving their goals and reminders so users will never be ' +
                'behind schedule. Tools used include Android Studio, Java, XML and Gradle.',
    			link: '',
    		}, {
                title: 'Trivia Web Application',
                description: 'An online trivia game in which players can participate using their individual web browsers to ' +
                'join a game and answer questions during their turn. Built using Ruby on Rails, AngularJS and WebSocket Technology.',
                link: ''
            }, {
    			title: 'wassup Naija',
    			description: 'This is a command line quiz game on some interesting facts about Nigeria. It was developed '+
    			'with C#. Unfortunately I have not shared the source code on any revision system. In the future I hope to '+
    			'build on this to produce a Windows Phone version.',
    			link: ''
    		}, {
    			title: 'JeoBlue International',
    			description: 'I volunteered to develop the website for Jeoblue International, an import/export company '+
    			'using the essentials as well as PHP.',
    			link: ''
    		}, {
    			title: 'Ohm I know!',
    			description: 'This is still a work in progress... It is an AngularJS based web application to help circuit lovers like me'+
    			' to easily read resistor color codes on the fly without needing any look up table.',
    			link: ''
    		}, {
                title: 'Receta',
                description: 'An online recipe listing tool. It was developed using Ruby on Rails and AngularJS.',
                link: ''
            }];

    		var j = 0;
	        var sideProjectsJSON = [];
	        sideProjectsJSON[j] = [];
	        for(var i = 0; i < json.length; ++i) {
	        	if(i > 0 && i % itemsPerRow === 0){
	        		j++;
	        		sideProjectsJSON[j] = [];
	        	}
	        	var index = i % itemsPerRow;
	        	sideProjectsJSON[j][index] = json[i];
	        }

	        if(callback){
	        	callback(sideProjectsJSON);
	        }
    	};

    	this.openMe = function(callback){
			// var height = $('.jce-about-me-container').css('height');
			// height = height.replace("px", "");
		// 	height = parseInt(height);
			$('#find-me').css('margin-top', '0px');
			if(callback){
				callback();
			}
		};

		this.closeMe = function(callback){
			var height = $('.jce-about-me-container').css('height');
			height = height.replace("px", "");
			height = parseInt(height) + 10;
			$('#find-me').css('margin-top', '-' + height + 'px');

			if(callback){
				callback();
			}
		};
    };

    return new MyWorkExperience();
  });
