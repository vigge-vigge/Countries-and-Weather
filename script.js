
document.getElementById("getInfo").addEventListener("click", function(){
    const country = document.getElementById("country").value;
    const apiKey = '66fad2b0412ad54b004b60e28b94e235';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`;
    fetchWeather(apiUrl);
})

async function fetchWeather(apiUrl) {
      const response = await fetch(apiUrl);
      const data = await response.json();
      displayWeather(data);
  }

  function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
      <h3 class='text-center'>Location: ${data.name}</h3>
      <h3 class='text-center'>Temperature: ${Math.round(data.main.temp -273)}°C</h3>
      <p class='text-center'>Weather: ${data.weather[0].description}</p>
    `;
  }