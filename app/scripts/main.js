'use strict';

//imgArray containing pics of players
var imgArray = [
    '../images/jonLester.png',
    '../images/davidOrtiz.png',
    '../images/stephenDrew.png',
    '../images/mikeNapoli.png',
    '../images/kojiUehara.png',
    '../images/xanderBogarts.png',
    '../images/gradySizemore.png',
    '../images/johnnyGomes.png',
    '../images/willMiddlebrooks.png',
    '../images/jackieBradley.png',
    '../images/clayBuchholz.png',
    '../images/shaneVictorino.png',
    '../images/johnLackey.png',
    '../images/danielNava.png',
    '../images/mikeCarp.png',
    '../images/felixDoubrant.png',
    '../images/ryanLavarnway.png',
    '../images/drakeBritton.png'
];

//Slideshow constructor that passes three parameters
function Slideshow (array,interval,delay){
    this.interval = interval;
    this.array = array;
    this.delay = delay;

    var playerImage = //this.array[3];

    for (var i=0; i < this.array.length; i++){
        //VARIABLE FOR RUNNING LOOP HERE
    }
//appending playersField to have the images from the imgArray of players
    $('.playersField').append('<img src="' + playerImage + '">').fadeIn(delay);
}

//creating the slideshow contructor with the 3 passing arguements
new Slideshow(imgArray, 2000, 600);

/////////////THIS IS THE WORKING FUNCTION
// window.onload = function() {
//     var image=document.getElementById('picSpot');
//     var index=0;
//     var interval = 2000;
//     function slide() {
//         image.src = imgArray[index++%imgArray.length];
//     }
//     setInterval(slide, interval);
// };

///////////////THIS IS THE WORKING FUNCTION