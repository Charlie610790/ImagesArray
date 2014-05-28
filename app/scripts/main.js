// var players = [
//     'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/3748.png&w=350&h=254',//David Ortiz
//     'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/6298.png&w=350&h=254',//Stephen Drew
//     'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30130.png&w=350&h=254',//Koji Uehara
//     'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/28444.png&w=350&h=254',//Mike Napoli
//     'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31606.png&w=350&h=254',//Xander Bogarts
//     'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/5882.png&w=350&h=254',//Grady Sizemore
//     'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/28487.png&w=350&h=254',//John Lester
//     'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/5860.png&w=350&h=254',//Johnny Gomes
//     'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31232.png&w=350&h=254',//Will Middlebrooks
//     'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32362.png&w=350&h=254',//Jackie Bradley Jr.
//     'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/28855.png&w=350&h=254',//Clay Buchholz
//     'http://1.bp.blogspot.com/-oBOoBntSHTI/Ul2Fr9UuWkI/AAAAAAAAB2A/8Hgolfw5lgo/s1600/LACK.png',//John Lackey
//     'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30910.png&w=350&h=254',//Daniel Nava
//     'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/29660.png&w=350&h=254',//Mike Carp
//     'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30066.png&w=350&h=254',//Felix Doubrant
//     'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31039.png&w=350&h=254',//Ryan Lavarnway
//	   'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31257.png&w=350&h=254',//Drake Britton
//	   'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/5409.png&w=350&h=254',//Shane Victorino
//     'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/6393.png&w=350&h=254'//Dustin Pedroia
// ];

function Player (name,imgURL) {
    this.imageURL = imgURL;
    this.playerName = name;
}

window.onload = function() {
    var image=document.getElementById("picSpot");
    var img_array=['../images/jonLester.png', '../images/davidOrtiz.png', '../images/stephenDrew.png', '../images/mikeNapoli.png', '../images/kojiUehara.png', '../images/xanderBogarts.png', '../images/gradySizemore.png', '../images/johnnyGomes.png', '../images/willMiddlebrooks.png', '../images/jackieBradley.png', '../images/clayBuchholz.png', '../images/shaneVictorino.png', '../images/johnLackey.png', '../images/danielNava.png', '../images/mikeCarp.png', '../images/felixDoubrant.png', '../images/ryanLavarnway.png', '../images/drakeBritton.png'];
    var index=0;
    var interval = 2000;
    function slide() {
        image.src = img_array[index++%img_array.length];
    }

    setInterval(slide, interval);
}

// var img = 0;

// $.each(players,function(i,e)
// 	{var redSoxPlayer = new Image();
// 		redSoxPlayer.src=e;
// });

// $('img').attr('src',players[0]);

// $('.container').click(function(){
//     $('img').fadeOut('slow',function(){
//         $(this).attr('src',players[(++img)%players.length]).fadeIn('slow').delay(800);
//     });
// });

// var images = ['../images/johnlester.png', '../images/davidortiz.png', '../images/stephendrew.png', '../images/mikenapoli.png'];
// var current = 4;

// function rotate() {
//     document.getElementById('image') = [current];
//     current = (current + 1) % images.length;

// }

// window.onload = function() {
//     rotate();
//     setInterval(rotate, 5000);
// }

//     $('.image').append('<div style="background-image: url(' + players[0].imageURL + '); height: 254px;"></div>');
//     $('.image').append('<div style="background-image: url(' + players[1].imageURL + '); height: 254px;"></div>');
//     $('.image').append('<div style="background-image: url(' + players[2].imageURL + '); height: 254px;"></div>');
//     $('.image').append('<div style="background-image: url(' + players[3].imageURL + '); height: 254px;"></div>');