$(document).ready(function(){

$('#menuafterscroll').hide();
$(window).scroll(function(){
  if ($(this).scrollTop() > 140) {$('#menuafterscroll').fadeIn(200);
    }else {
      $('#menuafterscroll').fadeOut(200);
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
    $('.mecze.active.ukryjmecze').hide();
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
  $(".hoverli2")
    .mouseover(function() {
       $('.borderbottom2').show()
    })
$(".dropdown-menu2")
    .mouseover(function() {
       $('.dropdown-menu2').show()
    })
$(".dropdown-menu2")
    .mouseover(function() {
       $('.borderbottom2').show()
    })
$(".dropdown-menu2")
    .mouseout(function() {
       $('.dropdown-menu2').hide()
    })
$(".dropdown-menu2")
    .mouseout(function() {
       $('.borderbottom2').hide()
    })
$(".hoverli2")
.mouseout(function() {
       $('.dropdown-menu2').hide()
       })
$(".hoverli2")
.mouseout(function() {
       $('.borderbottom2').hide()
       })



$(".hoverli3")
    .mouseover(function() {
       $('.borderbottom3').show()
    })
$(".hoverli3")
.mouseout(function() {
       $('.borderbottom3').hide()
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
 $(".hoverli4")
    .mouseover(function() {
       $('.borderbottom4').show()
    })
$(".dropdown-menu4")
    .mouseover(function() {
       $('.borderbottom4').show()
    })
$(".dropdown-menu4")
    .mouseout(function() {
       $('.borderbottom4').hide()
    })
$(".hoverli4")
.mouseout(function() {
       $('.borderbottom4').hide()
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
 $(".hoverli5")
    .mouseover(function() {
       $('.borderbottom5').show()
    })
$(".dropdown-menu5")
    .mouseover(function() {
       $('.borderbottom5').show()
    })
$(".dropdown-menu5")
    .mouseout(function() {
       $('.borderbottom5').hide()
    })
$(".hoverli5")
.mouseout(function() {
       $('.borderbottom5').hide()
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
 $(".hoverli6")
    .mouseover(function() {
       $('.borderbottom6').show()
    })
$(".dropdown-menu6")
    .mouseover(function() {
       $('.borderbottom6').show()
    })
$(".dropdown-menu6")
    .mouseout(function() {
       $('.borderbottom6').hide()
    })
$(".hoverli6")
.mouseout(function() {
       $('.borderbottom6').hide()
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
 $(".hoverli7")
    .mouseover(function() {
       $('.borderbottom7').show()
    })
$(".dropdown-menu7")
    .mouseover(function() {
       $('.borderbottom7').show()
    })
$(".dropdown-menu7")
    .mouseout(function() {
       $('.borderbottom7').hide()
    })
$(".hoverli7")
.mouseout(function() {
       $('.borderbottom7').hide()
       })


$('.buttonposition').click(function (){
 $('.pozabaner').hide()
 $('#baner').hide()
});
$('#baner').hide();
$('.pozabaner').hide();
$('form input').blur(function(){ 
   function runIt() {
  $('#baner').show();

}

   runIt();
});
$('form input').blur(function(){ 
$('.pozabaner').show();
});

$('form input').blur(function(){ 

  $('#baner').height($(window));

   $('.pozabaner').height($(window).height() );
 });
 });
 
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function przesun(){
 
  $('.nextmatch').slideUp(500);
  $('.nextmatch1').slideDown(500);
}
function przesun1(){
  $('.nextmatch1').slideUp(500);

  $('.nextmatch2').slideDown(500);
}
function przesun2(){

  $('.nextmatch1').slideUp(500);
  $('.nextmatch').slideDown(500);
}
function przesun3(){

  $('.nextmatch2').slideUp(500);
  $('.nextmatch1').slideDown(500);
}
