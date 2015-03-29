'use strict';


describe('techEval.evaluate module', function () {
    var expect=chai.expect;
    var $controller;
    var ratingService;
    var sandbox

    beforeEach(module('techEval.evaluate'));


    beforeEach(inject(function (_$controller_, _ratingService_) {
        $controller = _$controller_;
        ratingService = _ratingService_;
        sandbox=sinon.sandbox.create();

    }));

    afterEach(function () {
        sandbox.restore();
    });


    var createController = function () {
        var $scope = {};
        //change to stub when calling a web service
        sandbox.spy(ratingService,'ratings');

        sandbox.spy(ratingService,'ranges');

        $controller('EvaluateCtrl', {$scope: $scope});
        return $scope;
    };
    describe('evaluate controller', function() {
        it('create ranges',function(){
            var $scope =createController();
            $scope.ranges;
            expect(ratingService.ranges.called).to.be.true;

        })
    });
    describe('evaluate controller', function() {
        it('create ratings',function(){
            var $scope =createController();
            $scope.ratings;
            expect(ratingService.ratings.called).to.be.true;

        })
    });
});
