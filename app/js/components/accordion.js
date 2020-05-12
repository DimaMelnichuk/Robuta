$(function(){

   /***************** Accordion ********************/
   $(".accordion__item-title").click(function(event){
      if($(".accordion__item-title").hasClass("accordion__item-title--active")){
        $(".accordion__item-title").not($(this)).removeClass("accordion__item-title--active");
        $(".accordion__item-info").not($(this).next()).slideUp(300);
      }
      $(this).toggleClass("accordion__item-title--active").next().slideToggle(300);
   });

});