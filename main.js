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
 
function displayWeather(data, countryPrefix) {
    const { main, weather, wind, name } = data;

    
    document.querySelector(`.${countryPrefix}-location`).textContent = `Väder i ${name}`;
    const weatherIconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    document.querySelector(`.${countryPrefix}-weather-icon img`).src = weatherIconUrl;
    document.querySelector(`.${countryPrefix}-weather-icon img`).alt = weather[0].description;
    document.querySelector(`.${countryPrefix}-description`).textContent = weather[0].description;

  
    document.querySelector(`.${countryPrefix}-temperature`).textContent = `${Math.round(main.temp)}°`;
    document.querySelector(`.${countryPrefix}-min-max-temp`).textContent = `${Math.round(main.temp_min)}° / ${Math.round(main.temp_max)}°`;

    
    document.querySelector(`.${countryPrefix}-precipitation`).textContent = `${main.humidity}%`;
    document.querySelector(`.${countryPrefix}-humidity`).textContent = `${main.humidity}%`;
    document.querySelector(`.${countryPrefix}-wind-speed`).textContent = `${Math.round(wind.speed)} km/h`;
}

compareButton.addEventListener('click', function() {
    fetchWeather(citySverige, 'SE', 'sverige', 'Europe/Stockholm');
    fetchWeather(cityRwanda, 'RW', 'rwanda', 'Africa/Kigali');
});

function fetchWeather(city, countryCode, countryPrefix, timezone) {
    const apiKey = 'DIN_API_KEY_HÄR';
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

function displayWeather(data, countryPrefix) {
    // Destrukturera dataobjektet
    const { main, weather, wind, name } = data;

    // Kontrollera om nödvändiga data finns, annars logga fel och avsluta funktionen
    if (!main || !weather || !wind || !name) {
        console.error("Väderdata saknar nödvändiga egenskaper.");
        return;
    }

    // Hämta väderinformation
    const temperature = main.temp.toFixed(1); // Temperatur i Celsius
    const feelsLike = main.feels_like.toFixed(1); // Känns som
    const weatherDescription = weather[0].description; // Beskrivning av vädret
    const windSpeed = wind.speed.toFixed(1); // Vindhastighet
    const humidity = main.humidity; // Luftfuktighet

    // Hitta rätt kort beroende på landsprefix
    const targetCard = countryPrefix === 'sverige' ? sverigeCard : rwandaCard;

    // Kontrollera att targetCard existerar
    if (!targetCard) {
        console.error("Målkort för väderuppdatering hittades inte.");
        return;
    }

    // Bygg HTML-strängen för att visa väderinformation
    const weatherHTML = `
        <h2>Väder i ${name}</h2>
        <p>Temperatur: ${temperature}°C</p>
        <p>Känns som: ${feelsLike}°C</p>
        <p>Beskrivning: ${weatherDescription}</p>
        <p>Vindhastighet: ${windSpeed} m/s</p>
        <p>Luftfuktighet: ${humidity}%</p>
    `;

    // Uppdatera HTML-innehållet i kortet
    targetCard.innerHTML = weatherHTML;
}
