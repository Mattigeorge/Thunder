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

function fetchWeather(city, countryCode, countryPrefix, timezone) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric&lang=sv`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Fel: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data, countryPrefix);
            displayLocalTime(countryPrefix, timezone);
        })
        .catch(error => {
            console.error('Något gick fel:', error);
            const targetCard = countryPrefix === 'sverige' ? sverigeCard : rwandaCard;
            targetCard.innerHTML += `<p>Kunde inte hämta väderdata för ${city}. Fel: ${error.message}</p>`;
        });
}

compareButton.addEventListener('click', function() {
    fetchWeather(citySverige, 'SE', 'sverige', 'Europe/Stockholm');
    fetchWeather(cityRwanda, 'RW', 'rwanda', 'Africa/Kigali');
});
