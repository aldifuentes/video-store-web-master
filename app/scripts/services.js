'use strict';
angular.module('videoStore')
    .service('filmService', ['$http', 'baseURL', function($http,baseURL){

/*
.service('filmService', function() {
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
    */

        function getFilms() {
            return $http.get(baseURL+"films");
        }
        function getFilm(index) {
            console.log(films);
            return films[index];
        }
        return ({
            getFilms: getFilms,
            getFilm: getFilm
        });

    }]);



