'use strict';


describe('code.guide module', function () {
    var expect=chai.expect;
    var $controller;
    var atomService;
    var sandbox

    beforeEach(module('code.guide'));


    beforeEach(inject(function (_$controller_, _atomService_) {
        $controller = _$controller_;
        atomService = _atomService_;
        sandbox=sinon.sandbox.create();

    }));

    afterEach(function () {
        sandbox.restore();
    });


    var createController = function () {
        var $scope = {};
        //change to stub when calling a web service
        sandbox.spy(atomService,'ratings');

        sandbox.spy(atomService,'ranges');

        $controller('AtomCtrl', {$scope: $scope});
        return $scope;
    };
    describe('guide controller', function() {
        it('create ranges',function(){
            var $scope =createController();
            $scope.ranges;
            expect(atomService.ranges.called).to.be.true;

        })
    });
    describe('guide controller', function() {
        it('create ratings',function(){
            var $scope =createController();
            $scope.ratings;
            expect(atomService.ratings.called).to.be.true;

        })
    });
});
