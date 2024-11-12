 const apiKey = '9e7dafd242a8465114d3ad45789df441';

const compareButton = document.getElementById(`compareButton`);
const weatherResult = document.getElementById(`weatherResults`);
const weatherData = [];

compareButton.addEventListener(`click`, function() {

    const citySverige = document.getElementById(`CitySweden`).value;
    const cityRwanda = document.getElementById(`CityRwanda`).value;
    
    if (!citySverige || !cityRwanda) {
        alert("Vänligen välj en stad i både Sverige och Rwanda.");
        return;
    }

  

});


// API-nyckel för OpenWeatherMap
const apiKey = '9e7dafd242a8465114d3ad45789df441';

// DOM-element
const compareButton = document.getElementById('compareButton');
const sverigeCard = document.querySelector('.sverige-card');
const rwandaCard = document.querySelector('.rwanda-card');

// Event listener för Jämför-knappen
compareButton.addEventListener('click', function() {
    // Hämta stadsvärden
    const citySverige = document.getElementById('CitySweden').value;
    const cityRwanda = document.getElementById('CityRwanda').value;

    // Kontrollera att båda städer är valda
    if (!citySverige || !cityRwanda) {
        alert("Vänligen välj en stad i både Sverige och Rwanda.");
        return;
    }

    // Visa väderkorten
    sverigeCard.style.display = 'block';
    rwandaCard.style.display = 'block';
});

