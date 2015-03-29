'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('tech eval app', function () {

    browser.get('index.html');

    it('should automatically redirect to /evaluate when location hash/fragment is empty', function () {
        expect(browser.getLocationAbsUrl()).toMatch("/evaluate");
    });


    describe('evaluate', function () {

        beforeEach(function () {
            browser.get('index.html#/evaluate');
        });


        it('should render evaluate when user navigates to /evaluate', function () {
            expect(element.all(by.css('[ui-view] h2')).first().getText()).
                toMatch(/Evaluations/);
        });

        it('should render display a list of ratings /evaluate', function () {
            expect(element.all(by.repeater('r in ratings')).count()).toEqual(2);
        });
    });


});
