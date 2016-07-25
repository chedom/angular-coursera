'use strict';

angular.module('confusionApp.services', [])
    .constant('baseURL', 'http://localhost:3000/')
    .service('menuFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
        
        this.getDishes = function() {
            return $resource(baseURL + 'dishes/:id', null, {'update': {method: 'PUT'}});
        }
    
        this.getPromotions = function() {
            return $resource(baseURL + 'promotions/:id');
        }

    }])
    .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {
        return {
            getLeaders: function() {
                return $resource(baseURL + 'leadership/:id');
            }
        }
    }]);
