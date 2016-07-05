var app = angular.module('confusionApp', []);
app.controller('menuController', function() {

    this.tab = 1;
    this.filterText = '';

    this.select = function(setTab) {
        this.tab = setTab;
        if (setTab === 2) {
            this.filterText = 'appetizers';
        } else if (setTab === 3 ) {
            this.filterText = 'mains';
        } else if (setTab === 4) {
            this.filterText = 'dessert';
        } else {
            this.filterText = '';
        }
    };

    this.isSelected = function(checkTab) {
        return checkTab === this.tab;
    };

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
});
