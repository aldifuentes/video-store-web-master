'use strict';
var app = angular.module('videoStore',[]);

/*
app.controller('HomeController', ['$scope', function($scope) {

    var films=[
        {
            title:'ACADEMY DINOSAUR',
            image: 'images/academy_dinosaur.jpg',
            length: '86',
            price:'4.99',
            release: '2006',
            description:'A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies.'
        },
        {
            title:'ACE GOLDFINGER',
            image: 'images/ace_goldfinger.jpg',
            length: '48',
            price:'4.99',
            release: '2006',
            description:'A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China'
        },
        {
            title:'ADAPTATION HOLES',
            image: 'images/adaptation_holes.jpg',
            length: '50',
            price:'2.99',
            release: '2006',
            description:'A Astounding Reflection of a Lumberjack And a Car who must Sink a Lumberjack in A Baloon Factory'
        }
    ];
    $scope.films = films;

    $scope.showDetails = false;
    $scope.toggleDetails = function() {
        $scope.showDetails = !$scope.showDetails;
    };

}]);
*/

app.controller('ContactController', ContactController);
app.controller('FeedbackController', FeedbackController);

ContactController.$inject = ['$scope'];
function ContactController ($scope) {
    var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
    $scope.channels = channels;
    $scope.invalidChannelSelection = false;
}

FeedbackController.$inject = ['$scope'];
function FeedbackController ($scope) {
    $scope.feedback = {
        myChannel: "",
        firstName: "",
        lastName: "",
        agree: false,
        email: ""
    }
    $scope.sendFeedback = function() {
        $scope.showMessage = false;
        if ($scope.feedback.agree && ($scope.feedback.mychannel == "" ||
            !$scope.feedback.mychannel)) {
            $scope.invalidChannelSelection = true;
        } else {
            $scope.invalidChannelSelection = false;
            $scope.feedback.mychannel= "";
            $scope.feedback = {
                mychannel: "",
                firstName: "",
                lastName: "",
                agree: false,
                email: ""
            };
            $scope.feedbackForm.$setPristine();
            $scope.showMessage = true;
        }
    };
}
