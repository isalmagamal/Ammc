$(document).ready(function(){
//   jQuery(function($) {
//  var $navbar = $('header'),
//      navheight = $navbar.outerHeight(),
//      $window = $(window);
//  
//  function toggleNavBar() {
//    var scroll = $window.scrollTop();
//    
//    if (scroll >=60) {
//      if (!$navbar.hasClass('navbar-fixed-top')) {
//        $navbar.addClass('navbar-fixed-top');
//        $navbar.css('margin-top', -navheight);
//        $navbar.animate({ marginTop: 0 }, 500, function() {
//          $window.one('scroll', toggleNavBar);
//        });
//      } else {
//        $window.one('scroll', toggleNavBar);
//      }
//    } else {
//      if ($navbar.hasClass('navbar-fixed-top')) {
//        $navbar.removeClass('navbar-fixed-top');
//      }
//      
//      $window.one('scroll', toggleNavBar);
//    }
//  }
//  
//  $window.one('scroll', toggleNavBar);
//});
//    $(document).click((event) => {
//  if ($('.main-menu').hasClass('show-menu')) {
//        $('.main-menu').removeClass('show-menu');
//      }     
//});
    
     $('.hamburgler').click(function(){
        $('.main-menu').toggleClass('show-menu');
        $('html').addClass('lock-scroll')
    });      
    $('.close-menu-icon').click(function(){
        $('.main-menu').removeClass('show-menu');
        $('html').removeClass('lock-scroll')
    });  
});
