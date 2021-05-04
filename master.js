function toggleMobileMenu() {
    var menu = document.getElementById("nav-menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

$(window).on('resize', function(event){
    var windowWidth = $(window).width();
    if(windowWidth > 768){
        var menu = document.getElementById("nav-menu");
        menu.style.display = "flex";
    }else{
        var menu = document.getElementById("nav-menu");
        menu.style.display = "none";
    }
});
