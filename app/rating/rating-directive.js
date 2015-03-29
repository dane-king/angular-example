'use strict';

angular.module('techEval.evaluate')
    .directive('rating', function () {
        var link =function(scope, element, attrs) {
            attrs.$observe('name', function(name) {
                scope.min=0;
                scope.max=10;
                scope.name=name;
            });
        }
        return {
            restrict: 'E',
            replace:false,
            templateUrl:'rating/rating.html' ,
            link:link
        };
    });