const data = "json/data.json"

const main = document.querySelector("main");



fetch(data)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const businesses = jsonObject['businesses']
        businesses.forEach(businessDisplay);
    });




function businessDisplay(business) {

    //The card that we will create that contains the information.
    const card = document.createElement("div");

    //Image
    const image = document.createElement("img");
    image.src = `images/${business.imgfile}`;
    image.alt = business.name;
    image.setAttribute("loading", "lazy");
    card.appendChild(image);

    //Name
    const name = document.createElement("h2");
    name.textContent = business.name;
    card.appendChild(name);

    //Address
    const address = document.createElement("p");
    address.textContent = business.address;
    card.appendChild(address);

    //Phone
    const phone = document.createElement("p");
    phone.textContent = business.phone;
    card.appendChild(phone);

    //Website
    const website = document.createElement("a");
    website.textContent = business.website;
    website.href = business.website;
    card.appendChild(website);

    main.appendChild(card);
}