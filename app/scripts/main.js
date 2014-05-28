'use strict';
//Array of player images
// var players = [
//     {
//      playerName: Jon Lester;
//      imageURL: '../images/jonLester.png';
//     },

//     {
//      playerName: Jon Lester;
//      imageURL: '../images/jonLester.png';
//     },

//     {
//      playerName: Jon Lester;
//      imageURL: '../images/jonLester.png';
//     },

//     {
//      playerName: Jon Lester;
//      imageURL: '../images/jonLester.png';
//     },

//     {
//      playerName: Jon Lester;
//      imageURL: '../images/jonLester.png';
//     },

//     {
//      playerName: Jon Lester;
//      imageURL: '../images/jonLester.png';
//     },

//     {
//      playerName: Jon Lester;
//      imageURL: '../images/jonLester.png';
//     },

//     {
//      playerName: Jon Lester;
//      imageURL: '../images/jonLester.png';
//     },

//     {
//      playerName: Jon Lester;
//      imageURL: '../images/jonLester.png';
//     },
//     '../images/jonLester.png',
//     '../images/davidOrtiz.png',
//     '../images/stephenDrew.png',
//     '../images/mikeNapoli.png',
//     '../images/kojiUehara.png',
//     '../images/xanderBogarts.png',
//     '../images/gradySizemore.png',
//     '../images/johnnyGomes.png',
//     '../images/willMiddlebrooks.png',
//     '../images/jackieBradley.png',
//     '../images/clayBuchholz.png',
//     '../images/shaneVictorino.png',
//     '../images/johnLackey.png',
//     '../images/danielNava.png',
//     '../images/mikeCarp.png',
//     '../images/felixDoubrant.png',
//     '../images/ryanLavarnway.png',
//     '../images/drakeBritton.png'
// ];

var imgArray = [
    './images/jonLester.png',
    './images/davidOrtiz.png',
    './images/stephenDrew.png',
    './images/mikeNapoli.png',
    './images/kojiUehara.png',
    './images/xanderBogarts.png',
    './images/gradySizemore.png',
    './images/johnnyGomes.png',
    './images/willMiddlebrooks.png',
    './images/jackieBradley.png',
    './images/clayBuchholz.png',
    './images/shaneVictorino.png',
    './images/johnLackey.png',
    './images/danielNava.png',
    './images/mikeCarp.png',
    './images/felixDoubrant.png',
    './images/ryanLavarnway.png',
    './images/drakeBritton.png'
];

//Player constructor
function Player (name,imgURL) {
    this.imageURL = imgURL;
    this.playerName = name;
}

///////////////THIS IS THE WORKING FUNCTION
window.onload = function() {
    var image=document.getElementById('picSpot');
    var index=0;
    var interval = 2000;
    function slide() {
        image.src = imgArray[index++%imgArray.length];
    }

    setInterval(slide, interval);
};
///////////////THIS IS THE WORKING FUNCTION