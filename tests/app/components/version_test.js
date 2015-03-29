'use strict';

describe('techEval.version module', function() {
  beforeEach(module('techEval.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).to.equal('0.1');
    }));
  });
});
