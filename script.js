const apiKey =  `f68e8a6ab2e749e396385224241208`; 

function getWeather() {
    const city = document.getElementById('city-input').value;
    if (city) {
        fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('city-name').textContent = `Weather in ${data.location.name}, ${data.location.country}`;
                document.getElementById('temperature').textContent = `Temperature: ${data.current.temp_c}°C`;
                document.getElementById('description').textContent = `Condition: ${data.current.condition.text}`;
                document.getElementById('humidity').textContent = `Humidity: ${data.current.humidity}%`;
                document.getElementById('wind').textContent = `Wind Speed: ${data.current.wind_kph} kph`;
            })
            .catch(() => alert('City not found'));
    } else {
        alert('Please enter a city name');
    }
}
