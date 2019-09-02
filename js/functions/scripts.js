/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(window).scroll(function(){
   var scroll_position = $(window).scrollTop();
   if(scroll_position < 80){
       $("#nav-menu").removeClass("menu-visible");
   }
   if(scroll_position > 80){
       $("#nav-menu").addClass("menu-visible");
   }
});


