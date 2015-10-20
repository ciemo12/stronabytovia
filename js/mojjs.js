$(document).ready(function(){
  $('#menuafterscroll').hide();
    $(window).scroll(function(){
      if ($(this).scrollTop() > 140) {$('#menuafterscroll').fadeIn(0);
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
  $('.dropdown-menu').hide();
  $('.dropdown').hover(
        function(){$(this).children('.dropdown-menu').slideDown(200);
        },
        function(){$(this).children('.dropdown-menu').slideUp(200);
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
$(document).ready(function() {
  $('.main li').mouseover(function() {
    $('.borderbottom1').show("slide", 10000)
  });
});
$(document).ready(function() {
    $('.borderbottom1').css('opacity', 0);
    $('.borderbottom1').hover(function() { //kursor wchodzi
      $(this).stop().animate({'opacity': 0.8}, "fast");
  });
});

$(document).ready(function() {
    $('.borderbottom2').css('opacity', 0);
    $('.borderbottom2').hover(function() { //kursor wchodzi
      $(this).stop().animate({'opacity': 0.8}, "fast");
  });
});
$(document).ready(function() {
    $('.borderbottom3').css('opacity', 0);
    $('.borderbottom3').hover(function() { //kursor wchodzi
      $(this).stop().animate({'opacity': 0.8}, "fast");
      },function() { //kursor wychodzi
      $(this).stop().animate({'opacity': 0}, "fast");
  });
});
$(document).ready(function() {
    $('.borderbottom4').css('opacity', 0);
    $('.borderbottom4').hover(function() { //kursor wchodzi
      $(this).stop().animate({'opacity': 0.8}, "fast");
      },function() { //kursor wychodzi
      $(this).stop().animate({'opacity': 0}, "fast");
  });
});
$(document).ready(function() {
    $('.borderbottom5').css('opacity', 0);
    $('.borderbottom5').hover(function() { //kursor wchodzi
      $(this).stop().animate({'opacity': 0.8}, "fast");
  });
});
$(document).ready(function() {
    $('.borderbottom6').css('opacity', 0);
    $('.borderbottom6').hover(function() { //kursor wchodzi
      $(this).stop().animate({'opacity': 0.8}, "fast");
  });
});
$(document).ready(function() {
    $('.borderbottom7').css('opacity', 0);
    $('.borderbottom7').hover(function() { //kursor wchodzi
      $(this).stop().animate({'opacity': 0.8}, "fast");
  });
});

$(document).ready(function(){
    $('#slide').click(function(){
    var hidden = $('.nextmatch1');
    if (hidden.hasClass('visible')){
        hidden.animate({"left":"-1000px"}, "slow").removeClass('visible');
    } else {
        hidden.animate({"left":"0px"}, "slow").addClass('visible');
    }
    });
});
$(document).ready(function (){
  $(window).height(600);
  $('section').click(function (){
    $('#baner').remove()
  }); //koniec - zniknięcie po kliknieciu w 

}); //koniec ready
$(document).ready(function (){
  $(window).height(600);
  $('section').click(function (){
    $('.pozabaner').remove()
  }); //koniec - zniknięcie po kliknieciu w 

}); //koniec ready
$('#nameField').blur(function(){
  var fielfValue=$(this).val();
  if (isNaN(fieldValue)) {
    alert ('Musisz pisac liczbe');
  }
});

function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();

}
function on_top()
{
  if(window.scrollY!=0)
  {
    window.scrollBy(0,-50);
    setTimeout('on_top()',30);
  }
  if(window.scrollY!=0)
  {
    var myWindow = window.open("", "", "width=200, height=100");   // Opens a new window
    myWindow.document.write("<div>A new window!</div>");      // Some text in the new window
    myWindow.blur();  
  }
}
function ShowContent()
{
  if (d.length < 1)
    return;
  document.getElementById('#baner').style.display = "block";
}

