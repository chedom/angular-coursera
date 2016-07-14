'use strict';

var app = angular.module('confusionApp', []);
app.controller('MenuController', ['$scope', function($scope) {
    $scope.tab         = 1;
    $scope.filterText  = '';
    $scope.showDetails = false;

    $scope.toggleDetails = function() {
        $scope.showDetails = !$scope.showDetails;
    }

    $scope.select = function(setTab) {
        $scope.tab = setTab;
        if (setTab === 2) {
            $scope.filterText = 'appetizers';
        } else if (setTab === 3 ) {
            $scope.filterText = 'mains';
        } else if (setTab === 4) {
            $scope.filterText = 'dessert';
        } else {
            $scope.filterText = '';
        }
    };

    $scope.isSelected = function(checkTab) {
        return checkTab === $scope.tab;
    };

    $scope.dishes = [
        {
            name       : 'Uthapizza',
            image      : 'images/uthapizza.png',
            category   : 'mains',
            label      : 'Hot',
            price      : '4.99',
            description: 'A unique combination of Indian Uthappam and Italian pizza',
            comment    : ''
        },
        {
            name       : 'buffet',
            image      : 'images/buffet.png',
            category   : 'mains',
            label      : 'New',
            price      : '12.14',
            description: 'A unique combination of Indian Uthappam and Italian pizza',
            comment    : ''
        },
        {
            name       : 'elaicheesecake',
            image      : 'images/elaicheesecake.png',
            category   : 'appetizers',
            label      : 'Hot',
            price      : '9.44',
            description: 'A unique combination of Indian Uthappam and Italian pizza',
            comment    : ''
        },
        {
            name       : 'Vadonut',
            image      : 'images/vadonut.png',
            category   : 'desserts',
            label      : '',
            price      : '41.12',
            description: 'A unique combination of Indian Uthappam and Italian pizza',
            comment    : ''
        }
    ];
}]);
