'use strict';

var app = angular.module('confusionApp', []);
//menu controllers
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

// comments controllers
app.controller('DishDetailController', ['$scope', function($scope) {

    var dish= {
                  name:'Uthapizza',
                  image: 'images/uthapizza.png',
                  category: 'mains',
                  label:'Hot',
                  price:'4.99',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                  comments: [
                       {
                           rating:5,
                           comment:"Imagine all the eatables, living in conFusion!",
                           author:"John Lemon",
                           date:"2012-10-16T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                           author:"Paul McVites",
                           date:"2014-09-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
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
                           rating:2,
                           comment:"It's your birthday, we're gonna party!",
                           author:"25 Cent",
                           date:"2011-12-02T17:57:28.556094Z"
                       }

                   ]
            };

    $scope.dish = dish;

    $scope.orderProp = 'rating';
}]);

app.controller('DishCommentController', ['$scope', function($scope) {

    $scope.newComment = {
        rating: 5,
        comment: '',
        author: '',
        date: ''
    };

    $scope.stars = [1, 2, 3, 4, 5];

    $scope.sendComment = function() {
        var currentDate = new Date();
        $scope.newComment.date = currentDate.toISOString();
        $scope.dish.comments.push($scope.newComment);
        $scope.newComment = {
            rating: 5,
            comment: '',
            author: '',
            date: ''
        };
        $scope.commentForm.$setPristine();
    }

}]);

// contacts controllers
app.controller('ContactController', ['$scope', function($scope) {
    $scope.feedback = {
        firstname: '',
        lastname: '',
        agree: false,
        email:'',
        mychannel:''
    };

    var channels = [
        {value: 'tel', label: 'Tel.'}, 
        {value: 'email', label: 'Email'}
    ];

    $scope.channels = channels;
    $scope.ivalidChannelSelection = false;


}]);

app.controller('FeedbackController', ['$scope', function($scope) {
    $scope.sendSubmit = function() {
        console.log($scope.feedback, 'before feedback');
        if ($scope.feedback.agree && $scope.feedback.mychannel === '') {
            $scope.ivalidChannelSelection = true;
            console.log('incorrect');
        } else {
            $scope.ivalidChannelSelection = false;
            $scope.feedback = {
                firstname: '',
                lastname: '',
                agree: false,
                email:'',
                mychannel:''
            };
            $scope.feedbackForm.$setPristine();
            console.log($scope.feedback, 'after feedback');
        }

    }  
}]);
