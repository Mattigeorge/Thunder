<<<<<<< HEAD
=======
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

<<<<<<< HEAD
=======

>>>>>>> 2a4710b98f6843777f87f15833889b251311f453
// API-nyckel för OpenWeatherMap
const apiKey = '9e7dafd242a8465114d3ad45789df441';

const compareButton = document.getElementById('compareButton');

// Döljer väderkorten tills data hämtas
document.querySelector('.sverige-card').style.display = 'none';
document.querySelector('.rwanda-card').style.display = 'none';

// Översättningstabell för väderbeskrivningar
const weatherTranslations = {
    "clear sky": "klar himmel",
    "few clouds": "några moln",
    "scattered clouds": "spridda moln",
    "broken clouds": "trasiga moln",
    "shower rain": "skurar",
    "rain": "regn",
    "thunderstorm": "åska",
    "snow": "snö",
    "mist": "dimma",
    "overcast clouds": "mulet",
    "light rain": "lätt regn",
    "moderate rain": "måttligt regn"
};

// Lägg till Dark Mode-knapp och funktionalitet
const darkModeButton = document.createElement('button');
darkModeButton.textContent = 'Dark Mode';
darkModeButton.style.marginTop = '10px';
darkModeButton.style.padding = '8px 16px';
darkModeButton.style.borderRadius = '5px';
darkModeButton.style.cursor = 'pointer';
darkModeButton.style.backgroundColor = '#333';
darkModeButton.style.color = '#fff';
document.querySelector('header').appendChild(darkModeButton);

// Växla mellan mörkt och ljust läge när knappen klickas
darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

compareButton.addEventListener('click', function() {
    const citySverige = document.getElementById('StadSverige').value;
    const cityRwanda = document.getElementById('StadRwanda').value;

    if (!citySverige || !cityRwanda) {
        alert("Vänligen välj en stad i både Sverige och Rwanda.");
        return;
    }

    // Visa väderkorten när data hämtas
    document.querySelector('.sverige-card').style.display = 'block';
    document.querySelector('.rwanda-card').style.display = 'block';

    fetchWeather(citySverige, 'SE', 'sverige', 'Europe/Stockholm');
    fetchWeather(cityRwanda, 'RW', 'rwanda', 'Africa/Kigali');
});

>>>>>>> cac585741a56ec4e8b560ff08d11992e87fd85d8
function fetchWeather(city, countryCode, countryPrefix, timezone) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;

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
        });
}

// Funktion för att uppdatera väderinformation
function displayWeather(data, countryPrefix) {
    const { main, weather, wind, name } = data;

    // Uppdaterar platsnamn
    document.querySelector(`.${countryPrefix}-location`).textContent = `Väder i ${name}`;

    // Översätt väderbeskrivning till svenska
    const weatherDescription = weather[0].description;
    const translatedDescription = weatherTranslations[weatherDescription] || weatherDescription;

    // Uppdaterar väderikon och beskrivning
    const weatherIconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    document.querySelector(`.${countryPrefix}-weather-icon img`).src = weatherIconUrl;
    document.querySelector(`.${countryPrefix}-weather-icon img`).alt = translatedDescription;
    document.querySelector(`.${countryPrefix}-description`).textContent = translatedDescription;

    // Uppdaterar temperatur, min och max temperatur
    document.querySelector(`.${countryPrefix}-temperature`).textContent = `${Math.round(main.temp)}°`;
    document.querySelector(`.${countryPrefix}-min-max-temp`).textContent = `${Math.round(main.temp_min)}° / ${Math.round(main.temp_max)}°`;

    // Uppdaterar nederbörd, luftfuktighet och vindhastighet
    document.querySelector(`.${countryPrefix}-precipitation`).textContent = `${main.humidity}%`;
    document.querySelector(`.${countryPrefix}-humidity`).textContent = `${main.humidity}%`;
    document.querySelector(`.${countryPrefix}-wind-speed`).textContent = `${Math.round(wind.speed)} km/h`;
}

// Funktion för att hämta lokal tid för en specifik tidszon
function displayLocalTime(countryPrefix, timezone) {
    const options = {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        day: 'numeric',
        month: 'short',
        weekday: 'long',
    };
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('sv-SE', options);
    const parts = formatter.formatToParts(now);

    const day = parts.find(part => part.type === 'weekday').value;
    const date = parts.find(part => part.type === 'day').value;
    const month = parts.find(part => part.type === 'month').value;
    const time = parts.find(part => part.type === 'hour').value + ':' + parts.find(part => part.type === 'minute').value;

    document.querySelector(`.${countryPrefix}-date-time .date`).textContent = `${day} ${date} ${month}`;
    document.querySelector(`.${countryPrefix}-date-time .time`).textContent = time;
}
