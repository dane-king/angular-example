'use strict'
angular.module('code.guide')

    .controller('AtomCtrl', ['$scope','atomService',function ($scope,atomService) {
        $scope.ratings=atomService.ratings();
        $scope.ranges=atomService.ranges();

    }]);

