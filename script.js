const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
function toggleMenu(){
    menu.classList.toggle("active");
}

menuBtn.addEventListener("click", toggleMenu);