'use strict';

angular.module('code.guide', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        var guideState = {
            url: '/guide',
            templateUrl: 'guide/guide.html',
            controller:'GuideCtrl'
        };
        var atomState = {
            url: '/atoms',
            templateUrl: 'guide/guide.html',
            controller:'AtomCtrl'
        };
        $stateProvider
            .state('guide',guideState)
            .state('atoms',atomState)
    }])



