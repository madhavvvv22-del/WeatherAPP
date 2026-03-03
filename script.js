const inputBox= document.querySelector('.input-box');
const searchbtn= document.getElementById('searchbtn');
const weather_img= document.querySelector('.weather-image');
const temp= document.querySelector('.temp');
const description= document.querySelector('.description');
const humid= document.getElementById('humid');
const windspeed= document.getElementById('Windspeed');
const locerror=document.querySelector('.location-error');

const webody=document.querySelector('.weather-body');

async function checkWeather(city){
    const api_key="e581b627166bb64c741ff10c054fe7c4";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const response = await fetch(url);
    const weather_data = await response.json();
    if(weather_data.cod===`404`){
        locerror.style.display="flex";
        webody.style.display="none";
        console.log("error");
        return;
    } 
    locerror.style.display="none";
    webody.style.display="flex";
    temp.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`; 
    description.innerHTML=`${weather_data.weather[0].description}`;
    humid.innerHTML= `${weather_data.main.humidity}%`;
    windspeed.innerHTML=`${weather_data.wind.speed}km/hr`;
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src="ssets/cloud.png";
            break;
         case 'Clear':
            weather_img.src="ssets/clear.png";
            break;
         case 'Rain':
            weather_img.src="ssets/rain.png";
            break;
         case 'Mist':
            weather_img.src="ssets/mist.png";
            break;
         case 'Snow':
            weather_img.src="ssets/snow.png";
            break;
            
            
            
    }

  
}

searchbtn.addEventListener('click', ()=> {
    checkWeather(inputBox.value);
});
inputBox.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        checkWeather(inputBox.value);
    }
});



















