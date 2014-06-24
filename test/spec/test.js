/* global describe, it */

(function () {
    'use strict';

    describe('Checking that the slideshow has the properties for delay and interval and the array to use.', function () {
            it('Should test to make sure that the slideshow function has the property for array.', function () {
                var arraySample = [1,2,3];
                var slideshowInstance = new Slideshow(arraySample,2000,600);
              
                expect(slideshowInstance.array).to.eql([1,2,3]);
            });

            it('Should test to make sure that the slideshow function has the property for interval.', function () {
              
                var arraySample = [1,2,3];
                var slideshowInstance = new Slideshow(arraySample,2000,600);
              
                expect(slideshowInstance.interval).to.equal(2000);
            });

            it('Should test to make sure that the slideshow function has the property for delay.', function () {
                var arraySample = [1,2,3];
                var slideshowInstance = new Slideshow(arraySample,2000,600);
              
                expect(slideshowInstance.delay).to.equal(600);
            });
        });

})();


