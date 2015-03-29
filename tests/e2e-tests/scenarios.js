'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('tech eval app', function () {

    browser.get('index.html');

    it('should automatically redirect to /atoms when location hash/fragment is empty', function () {
        expect(browser.getLocationAbsUrl()).toMatch("/atoms");
    });


    describe('evaluate', function () {

        beforeEach(function () {
            browser.get('index.html#/atoms');
        });


        it('should render guide when user navigates to /guide', function () {
            expect(element.all(by.css('[ui-view] h2')).first().getText()).
                toMatch(/Atoms/);
        });

        it('should render display a list of ratings /atoms', function () {
            expect(element.all(by.repeater('r in ratings')).count()).toEqual(2);
        });
    });


});
