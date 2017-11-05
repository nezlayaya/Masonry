jQuery(document).ready(function($){
    $("#menu-icon").on("click", function(){
        $("header nav").slideToggle();
    });
});
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#goTop').fadeIn();
        } else {
            $('#goTop').fadeOut();
        }
    });
    $('#goTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
});
var id_menu = new Array('sub_menu_1','sub_menu_2','sub_menu_3','sub_menu_4','sub_menu_5','sub_menu_6');
startList = function allclose() {
    for (i=0; i < id_menu.length; i++){
        document.getElementById(id_menu[i]).style.display = "none";
    }
};
function openMenu(id){
    for (i=0; i < id_menu.length; i++){
        if (id != id_menu[i]){
            document.getElementById(id_menu[i]).style.display = "none";
        }
    }
    if (document.getElementById(id).style.display == "block"){
        document.getElementById(id).style.display = "none";
    }else{
        document.getElementById(id).style.display = "block";
    }
}
window.onload=startList;