'use strict';

angular.module('techEval.version', [
  'techEval.version.interpolate-filter',
  'techEval.version.version-directive'
])

.value('version', '0.1');
