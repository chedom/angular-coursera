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
	        			templateUrl: '<h1>To be Completed</h1>',
	        			controller: 'IndexController'
	        		}
	        	}
	        })

	        .state('app.aboutus', {
	        	url: 'aboutus',
	        	views: {
	        		'content@': {
	        			templateUrl: '<h1>To be Completed</h1>',
	        			controller: 'AboutController'
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

	        .state('app.dishdetails', {
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