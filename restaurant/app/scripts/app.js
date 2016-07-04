var app = angular.module('confusionApp', []);
app.controller('menuController', function() {
    this.dishes = [
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
            category   : 'mains',
            label      : 'Hot',
            price      : '9.44',
            description: 'A unique combination of Indian Uthappam and Italian pizza',
            comment    : ''
        },
        {
            name       : 'Vadonut',
            image      : 'images/vadonut.png',
            category   : 'mains',
            label      : '',
            price      : '41.12',
            description: 'A unique combination of Indian Uthappam and Italian pizza',
            comment    : ''
        }
    ];
});
