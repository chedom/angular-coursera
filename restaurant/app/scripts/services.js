'use strict';

angular.module('services', [])
    .service('menuFactory', function () {

        var dishes = [
            {
                id:0,
                name       : 'Uthapizza',
                image      : 'images/uthapizza.png',
                category   : 'mains',
                label      : 'Hot',
                price      : '4.99',
                description: 'A unique combination of Uthapizza',
                comments: [
                     {
                         rating:5,
                         comment:"Imagine all the eatables, living in conFusion!",
                         author:"John Lemon",
                         date:"2012-10-16T17:57:28.556094Z"
                     },
                     {
                         rating:3,
                         comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                         author:"Paul McVites",
                         date:"2014-09-05T17:57:28.556094Z"
                     },
                     {
                         rating:4,
                         comment:"Eat it, just eat it!",
                         author:"Michael Jaikishan",
                         date:"2015-02-13T17:57:28.556094Z"
                     },
                     {
                         rating:5,
                         comment:"Ultimate, Reaching for the stars!",
                         author:"Ringo Starry",
                         date:"2013-12-02T17:57:28.556094Z"
                     },
                     {
                         rating:3,
                         comment:"It's your birthday, we're gonna party!",
                         author:"25 Cent",
                         date:"2011-12-02T17:57:28.556094Z"
                     }
                 ]
            },
            {
                id:1,
                name       : 'buffet',
                image      : 'images/buffet.png',
                category   : 'mains',
                label      : 'New',
                price      : '12.14',
                description: 'A unique combination of buffet',
                comments: [
                     {
                         rating:4,
                         comment:"Imagine all the eatables, living in conFusion!",
                         author:"John Lemon",
                         date:"2012-10-16T17:57:28.556094Z"
                     },
                     {
                         rating:3,
                         comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                         author:"Paul McVites",
                         date:"2014-09-05T17:57:28.556094Z"
                     },
                     {
                         rating:2,
                         comment:"Eat it, just eat it!",
                         author:"Michael Jaikishan",
                         date:"2015-02-13T17:57:28.556094Z"
                     },
                     {
                         rating:4,
                         comment:"Ultimate, Reaching for the stars!",
                         author:"Ringo Starry",
                         date:"2013-12-02T17:57:28.556094Z"
                     },
                     {
                         rating:1,
                         comment:"It's your birthday, we're gonna party!",
                         author:"25 Cent",
                         date:"2011-12-02T17:57:28.556094Z"
                     }
                 ]
            },
            {
                id:2,
                name       : 'elaicheesecake',
                image      : 'images/elaicheesecake.png',
                category   : 'appetizers',
                label      : 'Hot',
                price      : '9.44',
                description: 'A unique combination of elaicheesecake',
                comments: [
                     {
                         rating:3,
                         comment:"Imagine all the eatables, living in conFusion!",
                         author:"John Lemon",
                         date:"2012-10-16T17:57:28.556094Z"
                     },
                     {
                         rating:3,
                         comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                         author:"Paul McVites",
                         date:"2014-09-05T17:57:28.556094Z"
                     },
                     {
                         rating:2,
                         comment:"Eat it, just eat it!",
                         author:"Michael Jaikishan",
                         date:"2015-02-13T17:57:28.556094Z"
                     },
                     {
                         rating:3,
                         comment:"Ultimate, Reaching for the stars!",
                         author:"Ringo Starry",
                         date:"2013-12-02T17:57:28.556094Z"
                     },
                     {
                         rating:1,
                         comment:"It's your birthday, we're gonna party!",
                         author:"25 Cent",
                         date:"2011-12-02T17:57:28.556094Z"
                     }
                 ]
            },
            {
                id:3,
                name       : 'Vadonut',
                image      : 'images/vadonut.png',
                category   : 'desserts',
                label      : '',
                price      : '41.12',
                description: 'A unique combination of Vadonut',
                comments: [
                     {
                         rating:1,
                         comment:"Imagine all the eatables, living in conFusion!",
                         author:"John Lemon",
                         date:"2012-10-16T17:57:28.556094Z"
                     },
                     {
                         rating:2,
                         comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                         author:"Paul McVites",
                         date:"2014-09-05T17:57:28.556094Z"
                     },
                     {
                         rating:5,
                         comment:"Eat it, just eat it!",
                         author:"Michael Jaikishan",
                         date:"2015-02-13T17:57:28.556094Z"
                     },
                     {
                         rating:2,
                         comment:"Ultimate, Reaching for the stars!",
                         author:"Ringo Starry",
                         date:"2013-12-02T17:57:28.556094Z"
                     },
                     {
                         rating:3,
                         comment:"It's your birthday, we're gonna party!",
                         author:"25 Cent",
                         date:"2011-12-02T17:57:28.556094Z"
                     }
                 ]
            }
        ];

        this.getDishes = function() {
            return dishes;
        }

        this.getDish = function(index) {
            return dishes[index];
        }
    });
