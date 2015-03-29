'use strict';

// Declare app level module which depends on views, and components
angular.module('code', [
  'ui.router',
  'code.guide',
  'code.version'
]).
config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/atoms')

}]);

