'use strict';

angular.module('code.guide', ['ui.router'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
        .state('atoms', {
            url: '/atoms',
            templateUrl: 'guide/guide.html',
            controller:'AtomCtrl'
        })
    }])

    .controller('AtomCtrl', ['$scope','atomService',function ($scope,atomService) {
        $scope.ratings=atomService.ratings();
        $scope.ranges=atomService.ranges();

    }]);


