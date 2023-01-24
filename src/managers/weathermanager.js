export function getOttawaWeatherNow(){
    //coordinates for Ottawa, ON
    const lon = -75.6972;
    const lat = 45.4215;

    return fetch('weatherapp.txt')
        .then(response => response.text())
        .then(key => fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`))
        .then(response => response.json());
}