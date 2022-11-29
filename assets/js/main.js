// Xử lý khi click vào Mobile icon
var mobileIcon = document.querySelector(".nav__moblie-icon");
console.log(mobileIcon);
var navMenu = document.querySelector(".nav__menu");
var navBtn = document.querySelector(".nav__btn");

mobileIcon.addEventListener("click", ()=>{
    toggleActiveNav();
})

function toggleActiveNav(){
    navMenu.classList.toggle("active");
    navBtn.classList.toggle("active");
}

