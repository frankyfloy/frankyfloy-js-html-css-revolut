$(document).ready(function (){
    dropdown()
});


function dropdown(){
    var sub_menu = $(".subMenu");
    var menu = $(".menu");
    var cont_subMenu = $(".cont_subMenu");

    // sottomenu da nascondere
    sub_menu.addClass("d-none");


    // console.log(sub_menu);
    // console.log(menu);
    // console.log(cont_subMenu.length);

    cont_subMenu.hover(function(){

        var index = cont_subMenu.index(this);
        sub_menu.eq(index).toggleClass("d-none");
        // console.log(cont_subMenu.index(this));
    });
}
