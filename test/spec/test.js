/* global describe, it */

(function () {
    'use strict';

    describe('Checking that the slideshow has the properties for delay and interval and the array to use.', function () {
            it('Should test to make sure that the slideshow function has the property for array.', function () {

                var arraySample = [1,2,3]
                var slideshowInstance = new Slideshow(arraySample,2000,600);
              
                expect(slideshowInstance.array).to.equal([1,2,3]);

                
            });

            it('Should test to make sure that the slideshow function has the property for interval.', function () {
              
                var arraySample = [1,2,3]
                var slideshowInstance = new Slideshow(arraySample,2000,600);
              
                expect(slideshowInstance.interval).to.equal(2000);
            });
            it('Should test to make sure that the slideshow function has the property for delay.', function () {
                var arraySample = [1,2,3]
                var slideshowInstance = new Slideshow(arraySample,2000,600);
              
                expect(slideshowInstance.delay).to.equal(600);
            });
        });

    // describe('.', function () {
    //         it('Should test to make sure that the image URL is pulled from the array and matched to the object.', function () {
              
    //             var playerInstance = new Player('David Ortiz', 'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/3748.png&w=350&h=254');
              
    //             expect(playerInstance.imageURL).to.equal('http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/3748.png&w=350&h=254');
    //         });

    //         it('Should test to make sure that the player name is pulled from the array and matched to the object.', function () {
              
    //             var playerInstance = new Player('David Ortiz', 'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/3748.png&w=350&h=254');
              
    //             expect(playerInstance.playerName).to.equal('David Ortiz');
    //         });
    //     });


})();


