// JAVASCRIPT TOGGLE MENU---->
var menu = document.querySelector('#menuBars');
var navbar = document.querySelector('.navbar');

menu.onclick = () =>{
 menu.classList.toggle('fa-times')
 navbar.classList.toggle('active')
}


$(document).ready(function(){
    $(window).scroll(function(){
         if(this.scrollY > 20){
              $('.navBar').addClass("sticky");
         }else{
               $('.navBar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
});