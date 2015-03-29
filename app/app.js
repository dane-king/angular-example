'use strict';

// Declare app level module which depends on views, and components
angular.module('techEval', [
  'ui.router',
  'techEval.evaluate',
  'techEval.version'
]).
config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/evaluate')

}]);

