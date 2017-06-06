'use strict';
var app = angular.module('videoStore', ['ngRoute'])
    .config(Config)
Config.$inject = ['$routeProvider']

function Config($routeProvider) {
    $routeProvider
        .when('/filmList', {
            templateUrl : 'filmList.html',
            controller : 'HomeController'
        })
        .otherwise('/filmList');
}

app.constant("baseURL","http://localhost:3000/");

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
app.controller('FilmCommentController', FilmCommentController);

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


FilmCommentController.$inject = ['$scope'];
function FilmCommentController() {


//Paso 1: Crear un JavaScript object para guardar el nuevo component
    $scope.submitComment = function () {
//Paso 2: Esto es utilizado para guardar un nuevo date.
//”El campo donde se va a guardar el date en el objeto JavaScript que va a guardar el
        //nuevo comentario" = new Date().toISOString();
        $scope.filmComment.date = new Date().toISOString();
// Paso 3: “Push” el nuevo comentario dentro de todos los comentarios del film
      //  $scope.film.comments.push(el objeto JavaScript para el comentario);
//Paso 4: Reset el formulario con pristine
//Paso 5: Reset el objeto javascript recientemente guardado
    }
}