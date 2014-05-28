/* global describe, it */

(function () {
    'use strict';

    describe('Image has an Image URL property.', function () {
            it('Should test to make sure that the image URL is pulled from the array and matched to the object.', function () {
              
                var playerInstance = new Player('David Ortiz', 'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/3748.png&w=350&h=254');
              
                expect(playerInstance.imageURL).to.equal('http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/3748.png&w=350&h=254');
            });

            it('Should test to make sure that the player name is pulled from the array and matched to the object.', function () {
              
                var playerInstance = new Player('David Ortiz', 'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/3748.png&w=350&h=254');
              
                expect(playerInstance.playerName).to.equal('David Ortiz');
            });
        });
})();
