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
  $("button.1").click(function(){
    $("div.esempio1").toggle(500);
  });
});

/*Fine prima animazione */




/*Seconda animazione a scomparsa */

$(function() {
  $("button.2").click(function(){
    $("div.esempio2").fadeToggle(500);
  });
});

/*Fine Seconda animazione a scomparsa */




/* Terza Animazione a tendina */

$(function() {
  $("button.3").click(function(){
    $("div.esempio3").slideToggle(500);
  });
});

/* Fine Terza Animazione a tendina */


/*Animazione personalizzata : */

$(function() {
  $("button.4").click(function(){
  $("div.esempio4").animate({
    width:"150px",
    height:"150px"

    },1000);
  });
});

/*Mouse Animation */

$(function() {
$("div.esempio5").mouseenter(function(){
  $("div.esempio5").animate({
    width:"150px",
    height:"150px"
    },1000);
  });
  $("div.esempio5").mouseleave(function(){
    $("div.esempio5").animate({
      width:"300px",
      height:"300px"
      },1000);
    });
  });

/*End Mouse Animation */
