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
	        			templateUrl: 'views/home.html',
	        			controller: 'IndexController'
	        		}
	        	}
	        })

	        .state('app.aboutus', {
	        	url: 'aboutus',
	        	views: {
	        		'content@': {
	        			templateUrl: 'views/aboutus.html',
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