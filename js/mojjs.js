 $(document).ready(function(){
      $('#menuafterscroll').hide();
      $(window).scroll(function(){
        if ($(this).scrollTop() > 140) {
          $('#menuafterscroll').fadeIn(0);
      }
      else {
         $('#menuafterscroll').fadeOut(0);
      }
      });
    });
  $(document).ready(function() {
    $('.dropdown').css('opacity', 0.5);
    $('.dropdown').css('cursor', 'pointer');
    $('.dropdown').hover(function() { //kursor wchodzi
      $(this).stop().animate({'opacity': 1}, "fast");
    },function() { //kursor wychodzi
      $(this).stop().animate({'opacity': 0.5}, "fast");
    });
  });
        $(document).ready(function(){
   $('#gototop').hide();
   $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
         $('#gototop').fadeIn(500);
      }
      else {
         $('#gototop').fadeOut(500);
      }
   });
   $('#gototop').click(function(){
      $('html, body').animate({ scrollTop: 0 }, 1000);
      return false;
   });
 });
        $(document).ready(function() {

    $( '.dropdown' ).hover(
        function(){
            $(this).children('.dropdown-menu').slideDown(200);
        },
        function(){
            $(this).children('.dropdown-menu').slideUp(200);
        }
    );

});
$(document).ready(function() {
    $('.ticket').css('opacity', 0.5);
    $('.ticket').css('cursor', 'pointer');
    $('.ticket').hover(function() { //kursor wchodzi
      $(this).stop().animate({'opacity': 1}, "fast");
    },function() { //kursor wychodzi
      $(this).stop().animate({'opacity': 0.5}, "fast");
    });
  });

$(document).ready(function() {
    $('.firstTeam').css('opacity', 0.8);
    $('.firstTeam').hover(function() { //kursor wchodzi
      $(this).stop().animate({'opacity': 1}, "fast");
    },function() { //kursor wychodzi
      $(this).stop().animate({'opacity': 0.8}, "fast");
    });
  });
$(document).ready(function() {
    $('.secondTeam').css('opacity', 0.7);
    $('.secondTeam').hover(function() { //kursor wchodzi
      $(this).stop().animate({'opacity': 1}, "fast");
    },function() { //kursor wychodzi
      $(this).stop().animate({'opacity': 0.7}, "fast");
    });
  });
$(document).ready(function() {
    $('.juniorTeams').css('opacity', 0.7);
    $('.juniorTeams').hover(function() { //kursor wchodzi
      $(this).stop().animate({'opacity': 1}, "fast");
    },function() { //kursor wychodzi
      $(this).stop().animate({'opacity': 0.7}, "fast");
    });
  });

$(".firstTeamNews").toggle(
    function(){
        $(this).not(':animated').animate({width:300}, 500);
    },
    function(){
        $(this).not(':animated').animate({width:200}, 500);
    }
);