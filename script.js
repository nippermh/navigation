/*---------menu-----------*/

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

function openMenu() {
    menu.classList.add("open");
    menu.style.transition = "transform 0.5s ease";
    document.addEventListener('click', closeMenuOutside);
}

function closeMenu() {
    menu.classList.remove("open");
    menu.style.transition = "transform 0.5s ease";
    document.removeEventListener('click', closeMenuOutside);
}

function closeMenuOutside(event) {
    if (!menu.contains(event.target) && !openMenuBtn.contains(event.target)) {
        closeMenu();
    }
}

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

menu.addEventListener("transitionend", function() {
    this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
    arrow.addEventListener("click", function(){
        this.closest(".dropdown").classList.toggle("active");
    });
});