'use strict';

var app = angular.module('controllers', []);
//menu controllers
app.controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
    $scope.tab         = 1;
    $scope.filterText  = '';
    $scope.showDetails = false;
    $scope.dishes = menuFactory.getDishes();

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

}]);

// comments controllers
app.controller('DishDetailController', ['$scope', 'menuFactory', function($scope, menuFactory) {
    $scope.dish = menuFactory.getDish(3);

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
