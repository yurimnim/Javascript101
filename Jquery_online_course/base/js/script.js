$(function() {
  /*
    $('.lightbox').delay(500).fadeIn(300);

   $('.lightbox').click(function(){ 
    $('.lightbox').fadeOut();    
   });
   */

  /*
  $('#list').css('background-color','rgba(180,180,30,0.8)');
  $("input[type='text']").css('background-color', 'rgba(180,180,30,0.8)');
  $('h2,p,input').css('background-color', 'rgba(180,180,30,0.8)');
  $('p:first').css('background-color', 'rgba(180,180,30,0.8)');
  $('li:last').css('background-color', 'rgba(180,180,30,0.8)');
  $('li:even').css('background-color', 'rgba(180,180,30,0.8)');
  $('li:odd').css('background-color', 'rgba(180,180,30,0.8)');
  $('input:selected').css('background-color', 'rgba(180,180,30,0.8)');
  $('#list').children('li').css('background-color', 'rgba(180,180,30,0.8)');
  $('#list').siblings(':header').css('background-color', 'rgba(180,180,30,0.8)');
  $('#list').prev().css('background-color', 'rgba(180,180,30,0.8)');
  $('#list').next().css('background-color', 'rgba(180,180,30,0.8)');
  */

  /*
  $('#list').find('li').filter(':even').css('background-color', 'rgba(180,180,30,0.8)');
  $('li').filter(function(index) {
    return index % 3 === 2;
  }).css('background-color', 'rgba(180,180,30,0.8)');
  */

  /*
  $('li').first().css('background-color', 'rgba(180,180,30,0.8)');
  $('li').last().css('background-color', 'rgba(180,180,30,0.8)');
  $('li').eq(-2).css('background-color', 'rgba(180,180,30,0.8)');
  $('li').eq(4).css('background-color', 'rgba(180,180,30,0.8)');
  $('li').not(function(index){
    return index % 3 === 2;
  }).css('background-color', 'rgba(180,180,30,0.8)');
  */

  /*
  $('ul ul:first').append("<li>I'm going to be the last sub item!</li>");
  $("<li>I'm going to be the last sub item!</li >").appendTo('ul ul:first');
  $("<h4>Yurim Lee</h4>").prependTo("#content");
  */

  // $('.red-box').after('<div class="red-box"> another day');
  // $('.blue-box').before('<div class="blue-box"> Blue friend');

  // $('.blue-box').before(function(){
  //   return '<div class="blue-box">blue2<div>';
  // });

  //$('p').after($('#list'));

  //$('li').replaceWith('<li>Replaced.</li>');

  // $('li').replaceWith(function(){
  //   return '<li>Replace with function.<li>';
  // });

 // var firstListItem = $('li:first');
 // $('p:first').replaceWith(firstListItem); 

 //$('.red-box, .blue-box').replaceWith('<div class="green-box">more green</div>');

 //$('<div class="green-box"> more green!</div>').replaceAll('.red-box, .blue-box');

  
  //$('form').children().not('input:text, textarea, br').remove();
  //var removedListItem = $('li').remove();

  //var detachThis = $('li').detach();
  //$('#content').append(detachThis);

  //$('p:first').empty();

  //$('.red-box','.blue-box','.green-box').empty();

  // attr(), prop(), val()

  //var specialLink = $('#special-link');
  //console.log(specialLink.attr('href'));
  //console.log(specialLink.attr('title'));
  //specialLink.attr('href','http://www.naver.com');

  //var checkbox = $('input:checkbox');
  //console.log(checkbox.prop('checked'));
  //console.log(checkbox.attr('checked'));

  /*
  var textInput = $('input:text');
  textInput.val('minimini')
  console.log(textInput.val());

  var rangeInput = $('input[type="range"]');
  console.log(rangeInput.val());
  */

  /*
  var galleryImage = $('.gallery').find('img').first();
  var images = [
    'images/laptop-mobile_small.jpg',
    'images/laptop-on-table_small.jpg',
    'images/people-office-group-team_small.jpg',
  ];

  var i = 0;
  setInterval(function(){
    i = (i+1) % images.length;
    galleryImage.fadeOut(function(){
      $(this).attr('src', images[i]);
      $(this).fadeIn();
    });
    console.log(galleryImage.attr('src'));
  }, 2000);
  */

  /*
  $('.gallery').css('display','none');

  var redBox = $('.red-box');
  console.log(redBox.css('width'));
  console.log(redBox.width);

  redBox.css('background-color', '#AA7700');
  $('p').css('font-size','18px');

  redBox.css('width', '+=20px');

  var properties = $('p').css(['font-size','line-height','color'])
  console.log(properties);
  console.log(properties['font-size']);
  
  redBox.css('user-select',function(){
    return 'none';
  });
  */

  /*
  $('a').addClass('fancy-link');
  $('p:first').addClass('large emphasize');

  $('li li').addClass(function(index){
    $(this).addClass('item'+index);
  });

  $('div').addClass(function(index, currentClass){
    if(currentClass === 'dummy') {
      return 'red-box';
    }
  });

  $('.red-box').removeClass('red-box').addClass('blue-box');
  
 $('.dummy').removeClass('dummy').addClass('green-box');
*/

/*
  var gallery = $('.gallery');
  var images = [
    'images/laptop-mobile_small.jpg',
    'images/laptop-on-table_small.jpg',
    'images/people-office-group-team_small.jpg',
  ];

  gallery.data('#availableImages',images);
  //console.log(gallery.data('availableImages'));
  gallery.data('name','The Awesome Gallery');
  console.log(gallery.data());

  var firstPar = $('p:first');
  */

  //ㅅㄷ
   
});