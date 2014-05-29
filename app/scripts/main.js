'use strict';

//Array of player images
// var players = [
//     {
//      'playerName': 'Jon Lester',
//      'imageURL': '../images/jonLester.png'
//     },

//     {
//      'playerName': 'David Ortiz',
//      'imageURL': '../images/davidOrtiz.png'
//     },

//     {
//      'playerName': 'Stephen Drew',
//      'imageURL': '../images/stephenDrew.png'
//     },

//     {
//      'playerName': 'Mike Napoli',
//      'imageURL': '../images/mikeNapoli.png'
//     },

//     {
//      'playerName': 'Koji Uehara',
//      'imageURL': '../images/kojiUehara.png'
//     },

//     {
//      'playerName': 'Xander Bogarts',
//      'imageURL': '../images/xanderBogarts.png'
//     },

//     {
//      'playerName': 'Grady Sizemore',
//      'imageURL': '../images/gradySizemore.png'
//     },

//     {
//      'playerName': 'Johnny Gomes',
//      'imageURL': '../images/johnnyGomes.png'
//     },

//     {
//      'playerName': 'Will Middlebrooks',
//      'imageURL': '../images/willMiddlebrooks.png'
//     },

//     {
//      'playerName': 'Jackie Bradley Jr.',
//      'imageURL': '../images/jackieBradley.png'
//     },

//     {
//      'playerName': 'Clay Buchholz',
//      'imageURL': '../images/clayBuchholz.png'
//     },

//     {
//      'playerName': 'Shane Victorino',
//      'imageURL': '../images/shaneVictorino.png'
//     },

//     {
//      'playerName': 'John Lackey',
//      'imageURL': '../images/johnLackey.png'
//     },

//     {
//      'playerName': 'Daniel Nava',
//      'imageURL': '../images/danielNava.png'
//     },

//      {
//      'playerName': 'Mike Carp',
//      'imageURL': '../images/mikeCarp.png'
//     },

//      {
//      'playerName': 'Felix Doubrant',
//      'imageURL': '../images/felixDoubrant.png'
//     },

//      {
//      'playerName': 'Ryan Lavarnway',
//      'imageURL': '../images/ryanLavarnway.png'
//     },

//      {
//      'playerName': 'Drake Britton',
//      'imageURL': '../images/drakeBritton.png'
//     },
// ];

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

// //Player constructor
// function Player (name,imgURL) {
//     this.imageURL = imgURL;
//     this.playerName = name;
// }

//Slideshow constructor
function Slideshow (array,interval,delay){
    this.interval = interval;
    this.array = array;
    this.delay = delay;

    var playerImage = this.array[3];

    $('.playersField').append('<img src="' + playerImage + '">').fadein(delay);
}


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