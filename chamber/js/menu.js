const menu = document.querySelector("#hamburger");
const nav = document.querySelector("#navigation");
const banner = document.querySelector(".current-date");
const today = new Date()
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","Febuary","March","April","May","June","July","August", "September","October","November","December"]

menu.addEventListener("click", () => {
    nav.classList.toggle("responsive");
})

banner.appendChild(Object.assign(document.createElement("h3"), {
    class: "banner-text",
    innerHTML: `${weekday[today.getDay()]}, ${today.getDate()} ${month[today.getMonth()]} ${today.getFullYear()}`
}))

