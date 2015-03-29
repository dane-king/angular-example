'use strict';

angular.module('techEval.evaluate', ['ui.router'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('evaluate', {
            url: '/evaluate',
            templateUrl: 'evaluation/evaluate.html',
            controller: 'EvaluateCtrl'
        });
    }])

    .controller('EvaluateCtrl', ['$scope','ratingService',function ($scope,ratingService) {
        $scope.ratings=ratingService.ratings();
        $scope.ranges=ratingService.ranges();

    }]);


