"use strict";function Slideshow(a,b,c){this.interval=b,this.array=a,this.delay=c;var d=this.array[3];$(".playersField").append('<img src="'+d+'">').fadeIn(c)}var imgArray=["../images/jonLester.png","../images/davidOrtiz.png","../images/stephenDrew.png","../images/mikeNapoli.png","../images/kojiUehara.png","../images/xanderBogarts.png","../images/gradySizemore.png","../images/johnnyGomes.png","../images/willMiddlebrooks.png","../images/jackieBradley.png","../images/clayBuchholz.png","../images/shaneVictorino.png","../images/johnLackey.png","../images/danielNava.png","../images/mikeCarp.png","../images/felixDoubrant.png","../images/ryanLavarnway.png","../images/drakeBritton.png"];new Slideshow(imgArray,2e3,600);