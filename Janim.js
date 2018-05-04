/*
Project Name : Janim.js
Author : Nicholas Impieri Aka Anonik
License : GNU GENERAL PUBLIC LICENSE V.3
Version : 1.0.0
Build : a100
Language : English,Italian
Programming Language : Javascript with JQuery

Devolved By Nicholas Impieri Aka Anonik 2018

*/


/* Prima animazione */

$(function() {
  $("").click(function(){
    $("").toggle(500);
  });
});

/*Fine prima animazione */




/*Seconda animazione a scomparsa */

$(function() {
  $("").click(function(){
    $("").fadeToggle(500);
  });
});

/*Fine Seconda animazione a scomparsa */




/* Terza Animazione a tendina */

$(function() {
  $("").click(function(){
    $("").slideToggle(500);
  });
});

/* Fine Terza Animazione a tendina */


/*Animazione personalizzata : */

$(function() {
  $("").click(function(){
  $("").animate({
    width:"150px",
    height:"150px"

    },1000);
  });
});

/*Mouse Animation */

$(function() {
$("").mouseenter(function(){
  $("").animate({
    width:"150px",
    height:"150px"
    },1000);
  });
  $("").mouseleave(function(){
    $("").animate({
      width:"300px",
      height:"300px"
      },1000);
    });
  });

/*End Mouse Animation */
