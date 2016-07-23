'use strict';

var app = angular.module('confusionApp.ngRouter', ['ngRoute'])
	.config(function($routeProvider) {
	        $routeProvider
	            // route for the contactus page
	            .when('/contactus', {
	                templateUrl : 'views/contactus.html',
	                controller  : 'ContactController'
	            })
	            // route for the menu page
	            .when('/menu', {
	                templateUrl : 'views/menu.html',
	                controller  : 'MenuController'
	            })
	            // route for the dish details page
	            .when('/menu/:id', {
	                templateUrl : 'views/dishdetail.html',
	                controller  : 'DishDetailController'
	            })
	            .otherwise({redirectTo: '/contactus'});
	    });