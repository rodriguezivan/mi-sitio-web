$(document).ready(function(){   
   scroll();     
 });
 
 $(window).scroll(function(){      
    var scroll_position = $(window).scrollTop();
    var sobre_mi = $("#sobre-mi").offset().top;       
    var servicios = $("#servicios").offset().top;
    var contacto = $("#contacto").offset().top;
    var social = $("#social").offset().top;
    sobre_mi -= 300;    
    servicios -= 300;
    contacto -= 100;
    social -= 100;   

    if(scroll_position < 80){
        $("#nav-menu").removeClass("menu-visible");
    }
    if(scroll_position > 80){
        $("#nav-menu").addClass("menu-visible");
    } 
    if(scroll_position < sobre_mi){
        $("#item-home").addClass("active item-active");
        $("#item-sobre-mi").removeClass("active item-active");
        $("#item-trabajos").removeClass("active item-active");
        $("#item-contacto").removeClass("active item-active");
        $("#item-servicios").removeClass("active item-active");           
    }
    if(scroll_position >= sobre_mi){
        $("#item-sobre-mi").addClass("active item-active");
        $("#item-home").removeClass("active item-active");
        $("#item-trabajos").removeClass("active item-active");
        $("#item-contacto").removeClass("active item-active");
        $("#item-servicios").removeClass("active item-active");
        
        $("#sobre-mi .container.animado").addClass("animated fadeInUp");       
    }    
    if(scroll_position >= servicios){
       $("#item-home").removeClass("active item-active"); 
       $("#item-sobre-mi").removeClass("active item-active");
       $("#item-trabajos").removeClass("active item-active");
       $("#item-contacto").removeClass("active item-active");
       $("#item-servicios").addClass("active item-active");    
       
       $("#servicios .container.animado").addClass("animated fadeInUp");  
    }
    if(scroll_position >= contacto){
       $("#item-home").removeClass("active item-active"); 
       $("#item-sobre-mi").removeClass("active item-active");
       $("#item-trabajos").removeClass("active item-active");
       $("#item-servicios").removeClass("active item-active"); 
       $("#item-contacto").addClass("active item-active");   
       
       $("#social .container.animado").addClass("animated fadeInUp"); 
    }   
 });
 
 function scroll() {
     $("#ir-contacto").click(function(){        
        $("#contacto").animatescroll({padding: 80, scrollSpeed: 1500});                
     });
     $("#ir-servicios").click(function(){
        $("#servicios").animatescroll({padding: 80, scrollSpeed: 1500}); 
     });
     $("#ir-trabajos").click(function(){
        $("#trabajos").animatescroll({padding: 80, scrollSpeed: 1500}); 
     });
     $("#ir-sobre-mi").click(function(){
        $("#sobre-mi").animatescroll({padding: 80, scrollSpeed:1500}); 
     });
     $("#ir-inicio").click(function(){
        $("#home").animatescroll({scrollSpeed:1500}); 
     });
     $("#btn-ir-contacto").click(function(){
        $("#contacto").animatescroll({padding: 80, scrollSpeed:1500});        
     });
     $("#ir-home-logo").click(function(){
        $("#home").animatescroll({scrollSpeed:1500}); 
     });
 }
