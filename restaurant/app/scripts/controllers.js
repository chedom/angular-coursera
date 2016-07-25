'use strict';

var app = angular.module('confusionApp.controllers', []);
//menu controllers
app.controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
    $scope.tab         = 1;
    $scope.filterText  = '';
    $scope.showDetails = false;
    $scope.showMenu = false;
    $scope.message = 'Loading ...';
    $scope.dishes = {};

    menuFactory.getDishes().query(function(response) {
        $scope.dishes = response;
        $scope.showMenu = true;
    }, function(response) {
        $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
    });

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
app.controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
    
    $scope.showDish = false;
    $scope.message = 'Loading ...';
    $scope.dish = {};

    menuFactory.getDishes().get({id: parseInt($stateParams.id, 10)})
        .$promise.then(
            function(response) {
                $scope.dish = response;
                $scope.showDish = true;
            }, function(response) {
                $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
            }
        );


    $scope.orderProp = 'rating';
}]);

app.controller('DishCommentController', ['$scope', 'menuFactory', function($scope, menuFactory) {

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
        menuFactory.getDishes().update({id: $scope.dish.id}, $scope.dish);
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

app.controller('FeedbackController', ['$scope', 'feedbackFactory', function($scope, feedbackFactory) {
    $scope.sendSubmit = function() {
        console.log($scope.feedback, 'before feedback');
        if ($scope.feedback.agree && $scope.feedback.mychannel === '') {
            $scope.ivalidChannelSelection = true;
            console.log('incorrect');
        } else {
            feedbackFactory.getFeedback().save($scope.feedback);
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

app.controller('IndexController', 
    ['$scope', 'menuFactory', 'corporateFactory', function($scope, menuFactory, corporateFactory) {

    $scope.showDish = false;
    $scope.messageDish = 'Loading ...';
    $scope.firstDish = {};

    menuFactory.getDishes().get({id: 0})
        .$promise.then(
            function(response) {
                $scope.firstDish = response;
                $scope.showDish = true;
            }, function(response) {
                $scope.messageDish = 'Error: ' + response.status + ' ' + response.statusText;
            }
        );

    $scope.showPromotion = false;
    $scope.messagePromotion = 'Loading ...';
    $scope.promotion = {};

    menuFactory.getPromotions().get({id: 0})
        .$promise.then(
            function(response) {
                $scope.promotion = response;
                $scope.showPromotion = true;
            }, function(response) {
                $scope.messagePromotion = 'Error: ' + response.status + ' ' + response.statusText;
            }
        );

    $scope.showLeader = false;
    $scope.messageLeader = 'Loading ...';
    $scope.leader = {};

    corporateFactory.getLeaders().get({id: 3})
        .$promise.then(
            function(response) {
                $scope.leader = response;
                $scope.showLeader = true;
            }, function(response) {
                $scope.messageLeader = 'Error: ' + response.status + ' ' + response.statusText;
            }
        );

}]);

app.controller('AboutController', ['$scope', 'corporateFactory', function($scope, corporateFactory) {
    $scope.showLeaders = false;
    $scope.messageLeaders = 'Loading ...';
    $scope.leaders = {};

    corporateFactory.getLeaders().query(
        function(response) {
                $scope.leaders = response;
                $scope.showLeaders = true;
            }, function(response) {
                $scope.messageLeaders = 'Error: ' + response.status + ' ' + response.statusText;
            }
        )
}]);
