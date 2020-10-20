$(function() {
  $('.blue-box').animate({
    marginLeft: '200px',
    opacity : '0',
    height: '50px',
    width: '50px',
    marginTop: '25px'
  }, 1000, 'linear'); 

  $('p').animate({
    fontSize: '20px'
  }, 1000);
});