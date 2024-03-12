window.onload = async function() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.542694&lon=126.966386&appid=a697c02c4233e2d95bd1ae9227edab43&lang=kr')
        const data = await response.json()
        const temp = data.main.temp - 273

        document.getElementById('weather').textContent = `${data.name}, ${data.weather[0].description} ${parseInt(temp)}°C`;
    } catch (error) {
        console.error("Error fetching weather: ", error);
    }
}