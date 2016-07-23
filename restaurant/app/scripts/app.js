'use strict';

var app = angular.module('confusionApp', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/contactus', {
				templateUrl: 'templates/contacts.html',
				controller: 'ContactController'
			})

			.when('/menu', {
				templateUrl: 'templates/menu.html',
				controller: 'MenuController'
			})

			.when('/menu/:id', {
				templateUrl: 'templates/dishdetail.html',
				controller: 'DishDetailController'
			})

			.otherwise('/contactus');
	})
