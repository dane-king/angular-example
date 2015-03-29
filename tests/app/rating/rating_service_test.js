"use strict"

describe('techEval.evaluate module', function () {

    beforeEach(module('techEval.evaluate'));

    var ratingService;

    beforeEach(inject(function (_ratingService_) {
        ratingService = _ratingService_;
    }));

    describe('Rating service', function() {
        it('Should call rating service', function() {
            expect(ratingService).to.exist;
        });
    });
});