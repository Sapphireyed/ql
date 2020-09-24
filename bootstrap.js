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
 //$("chestarea").on('click', function(){
 //$("#chest").offset({left:(position.left + (width * 0.42)),top:(position.top + (height * 0.6))});
//  $('#chest').trigger('click')
 //});
 //choose hero
 var heroes = document.getElementsByClassName('heroesdesc')
 var avatars = document.getElementsByClassName('heroesav')
   $(".heroesav").each(function(){
     $(this).on('click', function(event){
       $('#zoommap, #zoomstop').hide();
       $('.main, .heroesdesc').hide();
       $(this).find('.heroesdesc').show();
       $(this).find('.heroesdesc').clone().appendTo('.exactdiv');
       $(this).find('.heroesdesc').hide()
  //     $(".exactdiv div:first-child").replaceWith( $(this).find('.heroesdesc') );
     })
   })
   $(".map").click(function(){
     $(".heroesdesc").hide();
     $(".main").show()
     $('#zoommap, #zoomstop').show();
   })
//zoom map
  $('#zoommap').on('click', function(){
    $('#ex1').zoom();
  })
 });
