jQuery(document).ready(function(){

            // scroll top to bottom
            $(window).scroll(function(){
              if($(this).scrollTop() >160 ){
                $('.scrollUp').fadeIn();
              }
              else{
                $('.scrollUp').fadeOut();
              }
            })
            $(".scrollUp").click(function(){
              $("html ,body").animate({scrollTop:0});
            });


  $('.tigger-menu').on('click',function(){
    $('.ofconvars-menu-2').addClass('active');
  });
  $('.card-item-close').on('click',function(){
    $('.ofconvars-menu-2').removeClass('active');
  });

  $('.tigger-card').on('click',function(){
    $('.ofconvars-menu').addClass('active');
  });
  $('.card-item-remove-word').on('click',function(){
    $('.ofconvars-menu').removeClass('active');
  });
// mobile menu tigger

  $('.mobile-tigger').on('click',function(){
    $('.ofconvars-mobile-menu').addClass('active');
  });
  $('.card-item-close').on('click',function(){
    $('.ofconvars-mobile-menu').removeClass('active');
  });

  // link will target id and scroll

  $(window).on('load', function(){
   $('.preloder').fadeOut();
 });

  $(window).scroll(function(){
   if($(this).scrollTop() >1){
     $('.menu-section').addClass('stiky');
   }
   else{
     $('.menu-section').removeClass('stiky');
   }
 });
 // scroll top to bottom
 //   Magnific Popup Activation Probucket
 $('select').niceSelect();
 // owl carousel
 $(".Seller-item").owlCarousel({
   loop: true,
   margin: 20,
   nav: true,
   dots:false,
   autoplay: false,
   responsive: {
     0: {
       items: 2,
     },
     767: {
       items: 3,
     },
     992: {
       items: 3,
     },
     1200: {
       items: 4,
     },
   },
 });


 // preloder
// wow select
new WOW().init();
   //     //   Magnific Popup Activation Probucket
  $(".video-play-btn").magnificPopup({
   type: "video",
 });
 });