'use strict';
angular.module('videoStore')
    .controller('HomeController', ['$scope', 'filmService', function($scope, filmService) {
        $scope.showDetails = false;
        $scope.films = filmService.getFilms();
        $scope.toggleDetails = function() {
            $scope.showDetails = !$scope.showDetails;
        };
    }]);




