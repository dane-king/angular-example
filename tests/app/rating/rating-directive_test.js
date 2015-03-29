'use strict';

describe('techEval.eval module', function() {
  var expect=chai.expect;
  var $compile,
      $rootScope;

  beforeEach(module('techEval.evaluate'));
  beforeEach(module('rating/rating.html'))

  beforeEach(inject(function(_$compile_,_$rootScope_){
    $compile=_$compile_;
    $rootScope=_$rootScope_;
  }));

  describe('rating directive', function () {
    it('should display input', function(){
      var element=$compile('<rating ng-model="rating"></rating>')($rootScope);
      $rootScope.$digest();
      expect('<div>\n    <div class="ng-binding"></div>\n    <label for="score">Score</label>\n    <input type="number" ng-model="r.score" name="" id="score_" required="" min="" max="" class="ng-pristine ng-untouched ng-valid-min ng-valid-max ng-invalid ng-invalid-required">\n    <label for="comment">Comment</label>\n    <input ng-model="r.comments" name="comment" id="comment" required="" class="ng-pristine ng-untouched ng-invalid ng-invalid-required">\n</div>').to.equal(element.html());
    })
  })
});

