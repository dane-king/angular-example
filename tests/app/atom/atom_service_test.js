"use strict"

describe('techEval.guide module', function () {

    beforeEach(module('code.guide'));

    var atomService;

    beforeEach(inject(function (_atomService_) {
        atomService = _atomService_;
    }));

    describe('Rating service', function() {
        it('Should call atom service', function() {
            expect(atomService).to.exist;
        });
    });
});