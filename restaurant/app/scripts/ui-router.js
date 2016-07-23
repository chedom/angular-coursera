'use strict';

var app = angular.module('confusionApp.uiRouter', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
	        $stateProvider

	        .state('app', {
	        	url: '/',
	        	views: {
	        		'header': {templateUrl: 'views/header.html'},
	        		'footer': {templateUrl: 'views/footer.html'},
	        		'content': {
	        			template: '<h1>To be Completed</h1>',
	        		}
	        	}
	        })

	        .state('app.aboutus', {
	        	url: 'aboutus',
	        	views: {
	        		'content@': {
	        			template: '<h1>To be Completed</h1>',
	        		}
	        	}
	        })

	        .state('app.contactus', {
	        	url: 'contactus',
	        	views: {
	        		'content@': {
	        			templateUrl: 'views/contactus.html',
	        			controller: 'ContactController'
	        		}
	        	}
	        })

	        .state('app.menu', {
	        	url: 'menu',
	        	views: {
	        		'content@': {
	        			templateUrl: 'views/menu.html',
	        			controller: 'MenuController'
	        		}
	        	}
	        })

	        .state('app.dishdetail', {
	        	url: 'menu/:id',
	        	views: {
	        		'content@': {
	        			templateUrl: 'views/dishdetail.html',
	        			controller: 'DishDetailController'
	        		}
	        	}
	        })

	    $urlRouterProvider.otherwise('/');
	    
	    });