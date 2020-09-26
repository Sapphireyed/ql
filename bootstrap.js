$(document).ready(function(){
  // enebles bs4 tootips
 $('[data-toggle="popover"]').popover();
 // slide in features
 $(document).on('scroll', function(){
   let i = 0;
   function slideFeature(){
     let features = document.querySelectorAll(".features li");
     if (i < features.length) {
       features[i].classList.add('slideIn');
       features[i].style.left = 0;
       i++;
     } else {
       clearInterval(start)
     }
   }
   let start = setInterval(slideFeature, 1200);
 });
 // popover responsive
 var width = $("#map").width();
 var height = $("#map").height();
 var position = $("#map").offset();
 $("#shoparea").on('click', function(){
 $("#shop").offset({left:(position.left + (width * 0.27)),top:(position.top + (height * 0.33))});
  $('#shop').trigger('click')
 });
 $("#chestarea").click(function(){
   $("#chest").offset({left:(position.left + (width * 0.42)),top:(position.top + (height * 0.2))});
   $("#chest").trigger('click')
 });

 //choose hero
 var heroes = document.getElementsByClassName('heroesdesc')
 var avatars = document.getElementsByClassName('heroesav')
   $(".heroesav").each(function(){
     $(this).on('click', function(event){
       //hide zoom button, all heroes and main map
       $('#zoommap').hide();
       $('.main, .heroesdesc').hide();
       //show chosen hero in the div where main map was.
       //Use clon to make the function work multiple times.
       //Hide chosen hero in other places (the div from which it was cloned)
       $(this).find('.heroesdesc').show();
       $(this).find('.heroesdesc').clone().appendTo('.exactdiv');
       $(this).find('.heroesdesc').hide()
       $('#prev, #next').show()
     })
   })
   // choose hero menu to toggle on small screens
   var x = window.matchMedia("(max-width: 760px)")
   if ( x.matches) {
     $('.heroesav').hide();
     $(".map").hide();
     $('.heroes h2:first-child').click(function(){
       $('.heroesav').toggle();
       $('.map').show();
     })
   }
   // map button to come back to main map view.
   $(".map").click(function(){
     $(".heroesdesc").hide();
     $(".main").show()
     $('#zoommap').show();
     $('#prev, #next').hide()
     if ( x.matches) {
       $(".heroesav").hide();
       $(".map").hide();
     }
   })
//zoom map
  $('#zoommap').on('click', function(){
    $('#ex1').zoom();
  })
 });
 //turn around hero
 var i = 0;
 let knightpositions = [
   "img/knight1.png",
   "img/knight2.png",
   "img/knight3.png",
   "img/knight5.png",
   "img/knight.png"
 ];

 function turnLeftKnight() {
   var knightel = document.getElementById('knight')
   if (i < knightpositions.length-1) {
     knightel.src = knightpositions[i+1];
     i++;
   } else {
     knightel.src = knightpositions[0]
     i=0;
   }
 }
 function turnRightKnight() {
   var knightel = document.getElementById('knight')
   if (i == 0) {
     knightel.src = knightpositions[knightpositions.length-1];
     i = knightpositions.length-1;
   } else if (i < knightpositions.length && i !== 0){
     knightel.src = knightpositions[i-1]
     i--;
   }
 }
