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

window.addEventListener("scroll", function(){
    var navigationBar = document.querySelector("nav");
    if(window.pageYOffset > 50){
        navigationBar.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.2)";
    }else{
        navigationBar.style.boxShadow = "none";
    }
});