var players = [
    'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/3748.png&w=350&h=254',//David Ortiz
    'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/6298.png&w=350&h=254',//Stephen Drew
    'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30130.png&w=350&h=254',//Koji Uehara
    'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/28444.png&w=350&h=254',//Mike Napoli
    'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31606.png&w=350&h=254',//Xander Bogarts
    'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/5882.png&w=350&h=254',//Grady Sizemore
    'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/28487.png&w=350&h=254',//John Lester
    'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/5860.png&w=350&h=254',//Johnny Gomes
    'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31232.png&w=350&h=254',//Will Middlebrooks
    'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32362.png&w=350&h=254',//Jackie Bradley Jr.
    'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/28855.png&w=350&h=254',//Clay Buchholz
    'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/5409.png&w=350&h=254',//Shane Victorino
    'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/6393.png&w=350&h=254'//Dustin Pedroia
];

// function Player (name,imgURL) {
//     this.imageURL = imgURL;
//     this.playerName = name;
// }

//     $('.image').append('<div style="background-image: url(' + players[0].imageURL + '); height: 254px;"></div>');
//     $('.image').append('<div style="background-image: url(' + players[1].imageURL + '); height: 254px;"></div>');
//     $('.image').append('<div style="background-image: url(' + players[2].imageURL + '); height: 254px;"></div>');
//     $('.image').append('<div style="background-image: url(' + players[3].imageURL + '); height: 254px;"></div>');

var img = 0;

// preload images
$.each(players,function(i,e)
	{var redSoxPlayer = new Image();
		redSoxPlayer.src=e;

});

// populate the image with first entry
$('img').attr('src',players[0]);

// standard jQuery
$('.container').click(function(){
    $('img').fadeOut('slow',function(){
        $(this).attr('src',players[(++img)%players.length]).fadeIn('slow').delay(800);
    });
});
// var opacity = 0.1; // change this for minimum opacity
// $('#fadeTo').click(function(){
//     $('img').fadeTo('slow',opacity,function(){
//         $(this).attr('src',imgs[(++img)%imgs.length]).fadeTo('slow',1);
//     });
// });
