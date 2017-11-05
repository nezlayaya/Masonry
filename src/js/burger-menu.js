jQuery(document).ready(function($){
    $("#menu-icon").on("click", function(){
        $("header nav").slideToggle();
    });
});