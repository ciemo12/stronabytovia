$(document).ready(function(){

$('#menuafterscroll').hide();
$(window).scroll(function(){
  if ($(this).scrollTop() > 140) {$('#menuafterscroll').fadeIn(0);
    }else {
      $('#menuafterscroll').fadeOut(0);
      }
});

$('li').css('cursor', 'pointer'); 

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




 $("#tableid").hover(
        function() { $(this).addClass("Hover"); },
        function() { $(this).removeClass("Hover"); }
    );
$('dropdown-menu1').hide();
$(".hoverli")
    .mouseover(function() {
       $('.dropdown-menu1').show()

    })
$(".hoverli")
    .mouseover(function() {
       $('.borderbottom1').show()

    })
$(".dropdown-menu1")
    .mouseover(function() {
       $('.dropdown-menu1').show()
    })
$(".dropdown-menu1")
    .mouseover(function() {
       $('.borderbottom1').show()
    })

$(".dropdown-menu1")
    .mouseout(function() {
       $('.dropdown-menu1').hide()
    })
$(".dropdown-menu1")
    .mouseout(function() {
       $('.borderbottom1').hide()
    })
$(".hoverli")
.mouseout(function() {
       $('.dropdown-menu1').hide()
       })
$(".hoverli")
.mouseout(function() {
       $('.borderbottom1').hide()
       })

$('dropdown-menu2').hide();
$(".hoverli2")
    .mouseover(function() {
       $('.dropdown-menu2').show()
    })
$(".dropdown-menu2")
    .mouseover(function() {
       $('.dropdown-menu2').show()
    })
$(".dropdown-menu2")
    .mouseout(function() {
       $('.dropdown-menu2').hide()
    })
$(".hoverli2")
.mouseout(function() {
       $('.dropdown-menu2').hide()
       })



$('dropdown-menu4').hide();
$(".hoverli4")
    .mouseover(function() {
       $('.dropdown-menu4').show()
    })
$(".dropdown-menu4")
    .mouseover(function() {
       $('.dropdown-menu4').show()
    })
$(".dropdown-menu4")
    .mouseout(function() {
       $('.dropdown-menu4').hide()
    })
$(".hoverli4")
.mouseout(function() {
       $('.dropdown-menu4').hide()
       })


$('dropdown-menu5').hide();
$(".hoverli5")
    .mouseover(function() {
       $('.dropdown-menu5').show()
    })
$(".dropdown-menu5")
    .mouseover(function() {
       $('.dropdown-menu5').show()
    })
$(".dropdown-menu5")
    .mouseout(function() {
       $('.dropdown-menu5').hide()
    })
$(".hoverli5")
.mouseout(function() {
       $('.dropdown-menu5').hide()
       })

$('dropdown-menu6').hide();
$(".hoverli6")
    .mouseover(function() {
       $('.dropdown-menu6').show()
    })
$(".dropdown-menu6")
    .mouseover(function() {
       $('.dropdown-menu6').show()
    })
$(".dropdown-menu6")
    .mouseout(function() {
       $('.dropdown-menu6').hide()
    })
$(".hoverli6")
.mouseout(function() {
       $('.dropdown-menu6').hide()
       })

$('dropdown-menu7').hide();
$(".hoverli7")
    .mouseover(function() {
       $('.dropdown-menu7').show()
    })
$(".dropdown-menu7")
    .mouseover(function() {
       $('.dropdown-menu7').show()
    })
$(".dropdown-menu7")
    .mouseout(function() {
       $('.dropdown-menu7').hide()
    })
$(".hoverli7")
.mouseout(function() {
       $('.dropdown-menu7').hide()
       })



$('.buttonposition').click(function (){
 $('.pozabaner').remove()
 $('#baner').remove()
});
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


