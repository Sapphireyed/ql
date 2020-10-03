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
  $('.exactdiv img:first-child').css({'visibility':'visible'})
});

//choose world and eroes menu toggle on small screen
var x = window.matchMedia("(max-width: 760px)")
  if ( x.matches) {
  //  $('.worldsav').hide();
  //  $('.explore').click(function(){
  //    $('.worldsav').toggle();
  //  })
    $('.heroesav').hide();
    $(".map").hide();
    $('.heroes h2:first-child').click(function(){
      $('.heroesav').toggle();
      $('.map').show();
    })
  }

//zoom map
  $('#zoommap').on('click', function(){
    $('#ex1').zoom();
    $('.exactdiv-worlds img:first-child').css({'visibility': 'hidden'})
    $('.exactdiv-worlds').mouseleave(function(){
      $('.exactdiv-worlds img:first-child').css({'visibility': 'visible'})
    })
  })

  //choose world map
  $('.worldsav').each(function(){
    $(this).on('click', function(){
      $('.exactdiv-worlds img').remove()
      $(this).find('.worldmap').show();
      $(this).find('.worldmap').clone().appendTo('#ex1');
      $(this).find('.worldmap').hide()
    })
  })
  //choose hero
    $(".heroesav").each(function(){
      $(this).on('click', function(event){
        //hide all heroes
        $('.heroesdesc').hide();
        // remove previous heroesdesc for turnAroundHrto to work properly
        $('.exactdiv').empty()
        i=0;
        //show chosen hero
        //Use clone to make the function work multiple times.
        //Hide chosen hero in other places (the div from which it was cloned)
        $(this).find('.heroesdesc').show();
        $(this).find('.heroesdesc').clone().appendTo('.exactdiv');
        $(this).find('.heroesdesc').hide()
      })
    })
 //turn around hero
 var i = 0;
 let knightpositions = [
   "img//heros/knight1.png",
   "img//heros/knight-l1.png",
   "img//heros/knight-l2.png",
   "img//heros/knight-l3.png",
   "img//heros/knight0.png",
   "img/heros/knight-r3.png",
   "img/heros/knight-r2.png",
   "img/heros/knight-r1.png"
 ];
 let elempositions = [
   "img//heros/elem1.png",
   "img//heros/elem-l1.png",
   "img//heros/elem-l2.png",
   "img//heros/elem-l3.png",
   "img//heros/elem0.png",
   "img/heros/elem-r3.png",
   "img/heros/elem-r2.png",
   "img/heros/elem-r1.png"
 ];
 let roguepositions = [
   "img//heros/rogue1.png",
   "img//heros/rogue-l1.png",
   "img//heros/rogue-l2.png",
   "img//heros/rogue-l3.png",
   "img//heros/rogue0.png",
   "img/heros/rogue-r3.png",
   "img/heros/rogue-r2.png",
   "img/heros/rogue-r1.png"
 ];
 let barbpositions = [
   "img//heros/barb1.png",
   "img//heros/barb-l1.png",
   "img//heros/barb-l2.png",
   "img//heros/barb-l3.png",
   "img//heros/barb0.png",
   "img/heros/barb-r3.png",
   "img/heros/barb-r2.png",
   "img/heros/barb-r1.png"
 ];
 let clericpositions = [
   "img//heros/cleric1.png",
   "img//heros/cleric-l1.png",
   "img//heros/cleric-l2.png",
   "img//heros/cleric-l3.png",
   "img//heros/cleric0.png",
   "img/heros/cleric-r3.png",
   "img/heros/cleric-r2.png",
   "img/heros/cleric-r1.png"
 ];
 let hunterpositions = [
   "img//heros/hunter1.png",
   "img//heros/hunter-l1.png",
   "img//heros/hunter-l2.png",
   "img//heros/hunter-l3.png",
   "img//heros/hunter0.png",
   "img/heros/hunter-r3.png",
   "img/heros/hunter-r2.png",
   "img/heros/hunter-r1.png"
 ];
 let witcherpositions = [
   "img//heros/witcher1.png",
   "img//heros/witcher-l1.png",
   "img//heros/witcher-l2.png",
   "img//heros/witcher-l3.png",
   "img//heros/witcher0.png",
   "img/heros/witcher-r3.png",
   "img/heros/witcher-r2.png",
   "img/heros/witcher-r1.png"
 ];
 let shamanpositions = [
   "img//heros/shaman1.png",
   "img//heros/shaman-l1.png",
   "img//heros/shaman-l2.png",
   "img//heros/shaman-l3.png",
   "img//heros/shaman0.png",
   "img/heros/shaman-r3.png",
   "img/heros/shaman-r2.png",
   "img/heros/shaman-r1.png"
 ];

$('#prev').click(function(){ //turn left
  var heroes = $('.exactdiv img')
  var heropos;
  var hero;
  //determine for which hero the function is ran
  if (heroes.attr('id') == 'knight') {
    heropos = knightpositions;
    hero = $('#knight')
  } else if (heroes.attr('id') == 'elem') {
    heropos = elempositions;
    hero = $('#elem')
  } else if (heroes.attr('id') == 'rogue') {
    heropos = roguepositions;
    hero = $('#rogue')
  } else if (heroes.attr('id') == 'barbarian') {
    heropos = barbpositions;
    hero = $('#barbarian')
  } else if (heroes.attr('id') == 'cleric') {
    heropos = clericpositions;
    hero = $('#cleric')
  } else if (heroes.attr('id') == 'huntsman') {
    heropos = hunterpositions;
    hero = $('#huntsman')
  } else if (heroes.attr('id') == 'witcher') {
    heropos = witcherpositions;
    hero = $('#witcher')
  } else if (heroes.attr('id') == 'shaman') {
    heropos = shamanpositions;
    hero = $('#shaman')
  }
  //run the function itself
    if (i < heropos.length-1) {
       hero.attr('src', heropos[i+1]);
       i++;
     } else {
      hero.attr('src', heropos[0]);
      i=0;
     }
})
$('#next').click(function(){ //turn right
  var heroes = $('.exactdiv img')
  var heropos;
  var hero;
  //determine for which hero the function is ran
  if (heroes.attr('id') == 'knight') {
    heropos = knightpositions;
    hero = $('#knight')
  } else if (heroes.attr('id') == 'elem') {
    heropos = elempositions;
    hero = $('#elem')
  } else if (heroes.attr('id') == 'rogue') {
    heropos = roguepositions;
    hero = $('#rogue')
  } else if (heroes.attr('id') == 'barb') {
    heropos = barbpositions;
    hero = $('#barb')
  } else if (heroes.attr('id') == 'cleric') {
    heropos = clericpositions;
    hero = $('#cleric')
  } else if (heroes.attr('id') == 'huntsman') {
    heropos = hunterpositions;
    hero = $('#huntsman')
  } else if (heroes.attr('id') == 'witcher') {
    heropos = witcherpositions;
    hero = $('#witcher')
  } else if (heroes.attr('id') == 'shaman') {
    heropos = shamanpositions;
    hero = $('#shaman')
  }
  //run the function itself
  if (i == 0) {
    hero.attr('src', heropos[heropos.length-1])
    i = heropos.length-1;
  } else if (i < heropos.length && i !== 0){
    hero.attr('src', heropos[i-1]);
    i--;
  }
})
//monsters table
$(window).on('load', function(){
  $('.monsters').load('https://localhost/ql/img/monsternames.html', function(){
    $('.monsters').trigger('click');
  });
  $('.monsters').click(function() {
    var mNames = $('.monsters');
    var mArray = mNames.html().split(/\n/);
    var index = mArray.indexOf('monsternames.txt')
    mArray.splice(index,1)
    var i;
    for (i=0; i < mArray.length-1; i++) {
      var x = $('.monster').append('<div class="col-md-4"><div class="card mb-2"><h5 class="text-light bg-secondary rounded text-center mb-2">'
      + mArray[i].toLowerCase() + '</h5><img class="d-block mx-auto shadow-lg" width="180" src="img/monsters/'
      + mArray[i] + '"></img><br><div></div>');
      $('.monsters').hide()
  //    x.after('<img class="col-md-4" width="20%" src="img/monsters/' + mArray[i] + '"></img>')
    }
  //  mNames.html(jQuery.type(mNames.html().split(/\n/)));
  //  mNames.html(mArray.length)
  })
})

 });
