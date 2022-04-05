const names = document.querySelectorAll('.name');
const phones = document.querySelectorAll('.phone');
const images = document.querySelectorAll('.image');
const services = document.querySelectorAll('.services');
const history = document.querySelectorAll('.history');
const closures = document.querySelectorAll('.closures');
const addresses = document.querySelectorAll('.address');



fetch('json/temple-data.json')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.temples.length; i++) {
            names[i].textContent = data.temples[i].name;
            phones[i].textContent = data.temples[i].phone;
            images[i].src = `images/${data.temples[i].image}`;
            images[i].width = "100";
            images[i].height = "100";
            services[i].textContent = data.temples[i].services;
            history[i].textContent = `Announced: ${data.temples[i].history[0].announced}, Groundbreaking: ${data.temples[i].history[0].groundbreaking}, Dedicated: ${data.temples[i].history[0].Dedicated}`;
            closures[i].textContent = data.temples[i].closures;
            addresses[i].textContent = `${data.temples[i].street}, ${data.temples[i].city}, ${data.temples[i].state}, ${data.temples[i].zip}`;
        }
    });