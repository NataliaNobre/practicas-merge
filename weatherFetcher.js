// weatherFetcher.js
//I added things!!!

async function fetchWeather(city) {
    try {
      const apiKey = "FAKE_API_KEY";
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
      const url2 = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

      const url3 = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

      const url4 = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  
      // Simulación de fetch!!!!
      console.log(`Llamando a: ${url}`);
      const fakeResponse = {
        location: { name: city },
        current: { temp_c: 22, condition: { text: "Parcialmente nublado" } }
      };
  
      return fakeResponse;
    } catch (error) {
      console.error("Error al obtener el clima:", error);
    }
  }
  
  // Ejemplo de uso
  fetchWeather("Buenos Aires").then(data => {
    if (data) {
      console.log(`El clima en ${data.location.name} es ${data.current.temp_c}°C y ${data.current.condition.text}`);
    }
  });
  