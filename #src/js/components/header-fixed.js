/*$(function(){
	$(window).scroll(function() {
   var scroll = $(window).scrollTop();

   if (scroll >= 20) {
     $('.header').addClass('fixed');
     $('.header__inner').css({
       "height": "60px",
     });
   } else {
     $('.header').removeClass('fixed');
     $('.header__inner').css({
       "height": "80px",
     });
   }
 	});
});*/

window.onscroll = function() {headerFixed()};
var header = document.querySelector(".header");
var headerContainer = document.querySelector(".header__container");
var sticky = header.offsetTop;

function headerFixed() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
    headerContainer.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
    headerContainer.classList.remove("fixed");
  }
}