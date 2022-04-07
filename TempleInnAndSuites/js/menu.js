const menu = document.querySelector(".hamburger");
const nav = document.querySelector(".nav ul");

menu.addEventListener("click", () => {
    nav.classList.toggle("responsive");
})

if (window.innerWidth > 1000) {
    menu.style.display = "none";
}

window.onresize = function() {
    if (window.innerWidth > 1000) {
        nav.classList.remove("responsive");
        menu.style.display = "none";
    } else {
        nav.classList.add("responsive");
        menu.style.display = "block";
    }

}