//JAVASCRIPT TOGGLE MENU---->
var menuBar = document.getElementById("menuBar");
function showMenu(){
    menuBar.style.right = "0";
}

function hideMenu(){
    menuBar.style.right = "-2000px";
}
// slide-up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
});

$(document).ready(function(){
    $(window).scroll(function(){
         if(this.scrollY > 20){
              $('.navbar').addClass("sticky");
         }else{
               $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
});

