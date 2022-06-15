const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });

function ordinal(number) {
    let x = number % 10;
    let y = number % 100;

    if (x === 1 && y !== 11) {
        return `${number}st`;
    } else if (x === 2 && y !== 12) {
        return `${number}nd`;
    } else if (x === 3 && y !== 13) {
        return `${number}rd`;
    }
    return `${number}th`;
}


const zlink = document.querySelector(".zlink")
zlink.style.backgroundImage = "url(javascript:alert("Meeting 6PM Wednesdays!")));"



function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let portrait = document.createElement('img');

    // Change the textContent property of the h2 element to contain the prophet's full name
    let prophetNum = ordinal(prophet.order);
    h2.textContent = `${prophet.name} ${prophet.lastname} - ${prophetNum} Prophet`;
    p1.textContent = `Date of Birth: ${prophet.birthdate}`;
    p2.textContent = `Place of Birth: ${prophet.birthplace}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}
