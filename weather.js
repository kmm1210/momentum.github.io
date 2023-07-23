const API_KEY = "f0a403d39009ba5e48e57b4866c70bde";

function onGeolocationOk(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        console.log(data);
        const name = data.name;
        const weather = (data.weather[0].main).toLowerCase();
        const temp = data.main.temp;
        const weatherDiv = document.getElementById("weather-div");
        const span1 = weatherDiv.querySelector("span:nth-child(1)");
        const span2 = weatherDiv.querySelector("span:nth-child(2)");
        const span3 = weatherDiv.querySelector("span:nth-child(3)");
        span1.innerText = name;
        
        if (weather.includes('cloud')) {
            span2.innerText = "☁︎";
        } else if(weather.includes('rain')){
            span2.innerText = "☂︎";
        }else if(weather.includes('snow')){
            span2.innerText = "☃︎";
        }else{
            span2.innerText = "☀︎";
        }
        span3.innerText = `${temp}℃`;
        
    });
}

function onGeolocationError() {

}
navigator.geolocation.getCurrentPosition(onGeolocationOk, onGeolocationError);