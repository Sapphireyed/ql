$.noConflict();

jQuery(document).ready(function($){
  //display 1st hero - knight - on load
  $(window).on('load', function(){
    $('#knightdesc').trigger('click');
  })
  // enebles bs4 tootips
 $('[data-toggle="popover"]').popover();
//dark mode
  var body = document.body;
  var light = true;
  function dark() {
    body.classList.remove('bg-light');
    body.classList.add('bg-dark');
    $('body').children().find('.text-secondary').removeClass('text-secondary').addClass('text-white');
    light = false;
  }
  function lightMode() {
    body.classList.add('bg-light')
    body.classList.remove('bg-dark')
    $('body').children().find('.text-white').removeClass('text-white').addClass('text-secondary');
    light= true;
  }
 document.getElementById('dark').onclick = function() {
  if (light) {
    dark();
  } else {
    lightMode();
  }
};


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

$('.area').hover(function(){
  if ($('a', this).attr('id') == 'shop'){
    $('a', this).offset({left:(position.left + (width * 0.27)),top:(position.top + (height * 0.33))});
  } else if ($('a', this).attr('id') == 'chest') {
    $('a', this).offset({left:(position.left + (width * 0.42)),top:(position.top + (height * 0.2))});
  }
  $('a', this).trigger('click');
}, function(){
  $('a', this).trigger('click')
});
// $("#shoparea").on('mouseenter', function(){
//  $("#shop").offset({left:(position.left + (width * 0.27)),top:(position.top + (height * 0.33))});
//  $('#shop').trigger('click');
//});

// $("#chestarea").mouseenter(function(){
//   $("#chest").offset({left:(position.left + (width * 0.42)),top:(position.top + (height * 0.2))});
//   $("#chest").trigger('click')
// });


 //choose hero
   $(".heroesav").each(function(){
     $(this).on('click', function(event){
       //hide all heroes
       $('.heroesdesc').hide();
       //show chosen hero
       //Use clone to make the function work multiple times.
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

 //turn around hero
 var i = 0;
 let knightpositions = [
   "img//heros/witcher1.png",
   "img//heros/witcher-l1.png",
   "img//heros/witcher-l2.png",
   "img//heros/witcher-l3.png",
   "img//heros/witcher0.png",
   "img/heros/witcher-r3.png",
   "img/heros/witcher-r2.png",
   "img/heros/witcher-r1.png"
 ];
 let elempositions = [
   "img//heros/knight1.png",
   "img//heros/knight-l1.png",
   "img//heros/knight-l2.png",
   "img//heros/knight-l3.png",
   "img//heros/knight0.png",
   "img/heros/knight-r3.png",
   "img/heros/knight-r2.png",
   "img/heros/knight-r1.png"
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
 $('#prev').click(turnLeftKnight);
 $('#next').click(turnRightKnight);
 });
