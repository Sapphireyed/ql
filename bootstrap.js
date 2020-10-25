$.noConflict();
jQuery(document).ready(function($){
  //display 1st hero - knight - on load
  var x = window.matchMedia("(max-width: 760px)")
  $(window).on('load', function(){
    $('#knightdesc').trigger('click');
    $('#mystic').trigger('click');
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
 //document.getElementById('dark').onclick = function() {
//  if (light) {
//    dark();
//  } else {
//    lightMode();
//  }
//};


 // slide in features
 $(window).on('load', function(){
   var dateHere = new Date();
   if (dateHere.getHours() > 7 && dateHere.getHours() < 16) {
     $('.main').css('backgroundImage',"url('img/mainpic.png')")
   } else if(dateHere.getHours() > 15 && dateHere.getHours() < 20) {
     $('.main').css('backgroundImage',"url('img/sunset.png')")
   } else {
     $('.main').css('backgroundImage',"url('img/night.png')")
   }
   let features = document.querySelectorAll(".features li");

      slideFeature();
      let out = setInterval(slideOut, 4999);
      let slideIn = setInterval(slideFeature, 5000)


   function slideOut(){
     for (var ind = 0; ind < features.length;ind++) {
       features[ind].classList.remove('slideIn')
     }
   }
   function slideFeature() {
     let i = Math.floor(Math.random() * features.length);
     features[i].classList.add('slideIn')
   }
 });



 // popover responsive
 var width = $("#map").width();
 var height = $("#map").height();
 var position = $("#map").offset();

//$('.area').hover(function(){
//  if ($('a', this).attr('id') == 'shop'){
//    $('a', this).offset({left:(position.left + (width * 0.27)),top:(position.top + (height * 0.33))});
//  } else if ($('a', this).attr('id') == 'chest') {
//    $('a', this).offset({left:(position.left + (width * 0.42)),top:(position.top + (height * 0.2))});
//  }
//  $('a', this).trigger('click');
//}, function(){
//  $('a', this).trigger('click')
//  $('.exactdiv img:first-child').css({'visibility':'visible'})
//});

//choose heroes menu toggle on small screen

  if ( x.matches) {
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
//    $('.zoomImg').css({'top': '-191.609px', 'left': '-309.436px', 'opacity': '1'})
    $('.exactdiv-worlds img:first-child').css({'visibility': 'hidden'})
  })


  //choose world map
  $('.worldsav img, .worldsav h6').each(function(){
    $(this).on('click', function(){
      $('.exactdiv-worlds img').remove()
      $(this).parent().find('.worldmap').show();
      $(this).parent().find('.worldmap').clone().appendTo('#ex1');
      $(this).parent().find('.worldmap').hide()
    })
  })
  //go to monsters from world selection
  $('#monstersInWorld').click(function(){
    var world = $('.exactdiv-worlds').find('img');
    var worldAlt = world[0].getAttribute('alt');
    $('.form-check-1').find("input:checkbox").each(function(){
      if ($(this).val() == worldAlt) {
        $('#enemies').find("input:checkbox").not($(this)).prop('checked', false)
        $(this).prop('checked', true)
        $('#enemies').find("input:checkbox").change()
        console.log($(this).val() == world)
      }
    })
  })
  $('#shrine').click(function(){
    $('.shrineDet').toggle()
    if ($(this).html() == 'More') {
      $(this).html('Less')
    } else {
      $(this).html('More')
    }
  })
  $('.moreObj').click(function(){
    $('.legend > div').each(function(){
      $(this).toggle();
      if ($(this).css('display') == 'block') {
        $(this).not('.shrineDet').css({'display': 'flex'})
      }
      $('.shrineDet').hide();
    })
    console.log($('.legend > div'))
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
//monsters collection
$(window).on('load', function(){ //on window load load monsters info from external file
  $('.monsters').load('img/monsternames1.html', function(){
    $('.mAbilities').load('img/monsterAbilities.html', function(){
    $('.monsters').trigger('click');
  })
  });
  $('.monsters').click(function() {

    var mNames = $('.monsters'); //all monster names loaded from file
    var mArrayAll = mNames.html().split(/\n/); //split info frome file to an array (each item is 1 enemy info)

    var mArray;
    var mAbilities;
    let index;
    var i;
    var mAbilitiesAll = $('.mAbilities').html().split(/\;/).sort();
    mAbilitiesAll.shift()
    var mAbilitiesList = []
    var ab;
    for (ab = 0; ab < mAbilitiesAll.length; ab++) {
      mAbilities = mAbilitiesAll[ab]
      var tre = mAbilities.indexOf(':') + 1
      var mAbility = mAbilities.replace(mAbilities.substring(0, tre), '').trim()
      mAbilitiesList.push(mAbility)

    }
    $('.mAbilities').html(mAbilitiesList)
    for (index=0; index < mArrayAll.length-1; index++) { //split each array item into seperate arrays
      //mArray[i] holds specific data about a specific (from mArrayAll[index]) monster (name, world, ability)
      mArray = mArrayAll[index].split(/\;/);
      console.log(mArray[2])
      var abil = mArray[2].replace(mArray[2].substring(0, mArray[2].length), mAbilitiesList[index])
      //add html elements, each holding specific enemy
      for (i=0; i < mArray.length-1 && mArray.length < 4; i+=2) {
        var monsterName = mArray[0].substring(0, mArray[0].length-4).replace("_", " "); //remove .PNG from monster name
        $('.monster').append('<div class="col-lg-4 col-sm-6 mItem"><div class="card mb-2"><h5 class="mName text-light bg-secondary rounded text-center">'
        + monsterName.toLowerCase() + '</h5><div class="row mx-auto mb-2"><div class="col-lg-5 col-10 mx-auto"><img class="rounded" src="img/monsters/'
        + mArray[0] + '"></div><div class="col my-auto"><p><b>Ability: </b><br>' + abil + '</p><p class="pWorlds"><b>Worlds: </b><br>' + mArray[1]
        + '</p><p class="pAct"><b>Act:</b>' + mArray[2] + '</p></div></div><div></div>');
        $('.monsters').hide();
      }
      //adding a function to recognize bosses in order to style them
      for (i=0; i < mArray.length-1 && mArray.length == 4; i+=3) {
        var monsterName = mArray[0].substring(0, mArray[0].length-4).replace("_", " "); //remove .PNG from monster name
        $('.monster').append('<div class="col-lg-4 col-sm-6 mItem"><div class="card mb-2"><h5 class="mName text-light bg-danger rounded text-center">'
        + monsterName.toLowerCase() + '</h5><div class="row mx-auto mb-2"><div class="col-lg-5 col-10 mx-auto"><img class="rounded" src="img/monsters/'
        + mArray[0] + '"></div><div class="col my-auto"><p><b>Ability: </b><br>' + abil + '</p><p class="pWorlds"><b>Worlds: </b><br>' + mArray[1]
        + '</p><p class="pAct"><b>Act:</b> 1, 2, 3</p></div></div><div></div>');
        $('.monsters').hide();
      }
    }
  })
})
//toggle monster collection showing more or less of them on the screen
$(".moreOrLess").click(function(){
  $(".monster div:nth-child(n+11)").toggle()
})
$('.backWorlds').click(function(){
  $(".monster div:nth-child(n+11)").toggle()
})
$(".hideOrShow").click(function(){
  $("#mFilter").toggle();
})
//search option to easier find enemies wit specific traits
$(".mSearch").on("keyup", function() {
  var input = $(this).val().toLowerCase();
    $(".monster > div").filter(function(){
      $(this).toggle($(this).text().toLowerCase().indexOf(input) > -1)
    });
  });
// filter monsters with checkboxes
function checkbox() {
  //worlds filter
  var checkedBoxes = $('.form-check-1').find("input:checkbox:checked"); //worlds
  var checkedVal = ['All'] //will hold of values of checked worlds checkboxes
  //get the values of checked boxes to perform search for all checked
  checkedBoxes.each(function(){
    checkedVal.push($(this).val())
  })
  var worldVal = new RegExp(checkedVal.join('|'))
  $(".mItem").removeClass('d-none')
  $(".pWorlds").each(function(){
    var monster = $(this).parent().parent().parent()
    if ($(this).text().match(worldVal) == null && checkedVal.length !== 1) {
      monster.parent().addClass('d-none')
    //  monster.toggle()
  } else if ($(this).text().match(worldVal) == null && checkedVal.length == 1) {
      monster.show()
    }
  })
  //type Filter
var enemyType = $('.form-check-2').find("input:checkbox:checked")//type
var boss = $('.mItem').find('.bg-danger').parent().parent()
$('.mItem').each(function(){
  if ($(this).css('display') !== 'none' && enemyType.val()=='boss') {
    $(".mItem").not(boss).addClass('d-none')
  } else if (($(this).css('display') !== 'none' && enemyType.val()=='normal')) {
    boss.addClass('d-none');
  }
})
//act filter
var enemyAct = $('.form-check-3').find("input:checkbox:checked")//act
var checkedAct = [];
enemyAct.each(function(){
  checkedAct.push($(this).val());
})
var actVal = new RegExp(checkedAct.join('|'));
$(".pAct").each(function(){
  var monsterAct = $(this).parent().parent().parent()
  if ($(this).text().match(actVal) == null) {
    monsterAct.parent().addClass('d-none')
  //  monster.toggle()
} else if ($(this).text().match(actVal) == null) {
    monsterAct.show()
  }
})
}
$('#enemies').find("input:checkbox").on('change', checkbox)
 });
