'use strict';

angular.module('code.version', [
  'code.version.interpolate-filter',
  'code.version.version-directive'
])

.value('version', '0.1');
