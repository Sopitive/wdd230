const menu = document.querySelector(".hamburger");
const nav = document.querySelector(".nav ul");
// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// const month = ["January","Febuary","March","April","May","June","July","August", "September","October","November","December"]

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