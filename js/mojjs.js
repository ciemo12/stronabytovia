$(document).ready(function(){


$('#menuafterscroll').hide();
$(window).scroll(function(){
  if ($(this).scrollTop() > 140) {$('#menuafterscroll').fadeIn(0);
    }else {
      $('#menuafterscroll').fadeOut(0);
      }
});
$('.dropdown').css('opacity', 0.5);
$('.dropdown').css('cursor', 'pointer');
$('.dropdown').hover(function() { //kursor wchodzi
  $(this).stop().animate({'opacity': 1}, "fast");
    },
    function() { //kursor wychodzi
      $(this).stop().animate({'opacity': 0.5}, "fast");
    });
$('#gototop').hide();
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) { $('#gototop').fadeIn(500);
      }else {
      $('#gototop').fadeOut(500);
      }
});
$('#gototop').click(function(){
  $('html, body').animate({ scrollTop: 0 }, 1000);
    return false;
});
$('.dropdown-menu').hide();
$('.dropdown').hover(function(){
    $(this).children('.dropdown-menu').slideDown(200);
        });
$('.firstTeam').css('opacity', 0.8);
$('.firstTeam').hover(function() { //kursor wchodzi
      $(this).stop().animate({'opacity': 1}, "fast");
    },function() { //kursor wychodzi
      $(this).stop().animate({'opacity': 0.8}, "fast");
    });
$('.secondTeam').css('opacity', 0.7);
$('.secondTeam').hover(function() { //kursor wchodzi
  $(this).stop().animate({'opacity': 1}, "fast");
    },function() { //kursor wychodzi
      $(this).stop().animate({'opacity': 0.7}, "fast");
});
$('.juniorTeams').css('opacity', 0.7);
$('.juniorTeams').hover(function() { //kursor wchodzi
  $(this).stop().animate({'opacity': 1}, "fast");
    },function() { //kursor wychodzi
      $(this).stop().animate({'opacity': 0.7}, "fast");
});
$('.main li').mouseover(function() {
    $('.borderbottom1').show("slide", 10000)
  });
$('.borderbottom1').css('opacity', 0);
$('.borderbottom1').hover(function() { //kursor wchodzi
  $(this).stop().animate({'opacity': 0.8}, "fast");
});
$('.borderbottom2').css('opacity', 0);
$('.borderbottom2').hover(function() { //kursor wchodzi
  $(this).stop().animate({'opacity': 0.8}, "fast");
  });
$('.borderbottom3').css('opacity', 0);
$('.borderbottom3').hover(function() { //kursor wchodzi
$(this).stop().animate({'opacity': 0.8}, "fast");
  });
$('.borderbottom4').css('opacity', 0);
$('.borderbottom4').hover(function() { //kursor wchodzi
  $(this).stop().animate({'opacity': 0.8}, "fast");
  });

$('.borderbottom5').css('opacity', 0);
$('.borderbottom5').hover(function() { //kursor wchodzi
  $(this).stop().animate({'opacity': 0.8}, "fast");
});
$('.borderbottom6').css('opacity', 0);
$('.borderbottom6').hover(function() { //kursor wchodzi
$(this).stop().animate({'opacity': 0.8}, "fast");
});
$('.borderbottom7').css('opacity', 0);
$('.borderbottom7').hover(function() { //kursor wchodzi
  $(this).stop().animate({'opacity': 0.8}, "fast");
  });
$('#slide').click(function(){
    var hidden = $('.nextmatch1');
    if (hidden.hasClass('visible')){
      hidden.animate({"left":"-1000px"}, "slow").removeClass('visible');
    } else {
      hidden.animate({"left":"0px"}, "slow").addClass('visible');
    }
  });

  $('section').click(function (){
    $('#baner').remove()
  }); //koniec - zniknięcie po kliknieciu w 

  $('section').click(function (){
    $('.pozabaner').remove()
  }); //koniec - zniknięcie po kliknieciu w 
$('#baner').hide();
$('.pozabaner').hide();
$('form input').blur(function(){ 
  $('#baner').show();
});
$('form input').blur(function(){ 
$('.pozabaner').show();
});
$('form input').blur(function() { $('html, body').animate({ scrollTop: 0 }, 1000);
      return false;
   });
$('form input').blur(function(){ 

  $('#baner').height($(window));

   $('.pozabaner').height($(window).height() );
 });
 });


