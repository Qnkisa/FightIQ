var menu = document.getElementById("menu");
var hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click",function(){
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
});