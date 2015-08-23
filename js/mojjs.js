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