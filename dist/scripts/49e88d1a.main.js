"use strict";function Player(a,b){this.imageURL=b,this.playerName=a}var imgArray=["../images/jonLester.png","../images/davidOrtiz.png","../images/stephenDrew.png","../images/mikeNapoli.png","../images/kojiUehara.png","../images/xanderBogarts.png","../images/gradySizemore.png","../images/johnnyGomes.png","../images/willMiddlebrooks.png","../images/jackieBradley.png","../images/clayBuchholz.png","../images/shaneVictorino.png","../images/johnLackey.png","../images/danielNava.png","../images/mikeCarp.png","../images/felixDoubrant.png","../images/ryanLavarnway.png","../images/drakeBritton.png"];window.onload=function(){function a(){b.src=imgArray[c++%imgArray.length]}var b=document.getElementById("picSpot"),c=0,d=2e3;setInterval(a,d)};