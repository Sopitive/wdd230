const menu = document.querySelector("#hamburger");
const nav = document.querySelector("#navigation");


menu.addEventListener("click", () => {
    nav.classList.toggle("responsive");
})

