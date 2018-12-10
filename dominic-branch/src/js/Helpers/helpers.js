
import axios from 'axios';

const apiKey = '&APPID=6d99186162ab69f549aae9f7f584c075';

export default (city, longitude, latitude)=>{
    if(city){
        console.log(city);
        return axios.get(cityUrl(city)).then(res => res.data).catch( err => console.log(err))
    }
    else if(longitude && latitude){
        console.log(longitude);
        return  axios.get(cordsUrl(latitude,longitude)).then(res => res.data).catch( err => console.log(err))
    } 
}

export function formatData(res, city){
   let weatherData = [];
   console.log('list',res.list);
    res.list.map((data,index) => {
       if(city){
           console.log('data',data);
        return weatherData.push({
             city: city,
             temp: `${data.main.temp} °C`,
             clouds: `${data.clouds.all} %`,
             rain: `${data.rain['3h']} mm`,
             snow: `${data.snow['3h']} mm`,
             pressure: `${data.main.pressure} hPa`,
             humidity: `${data.main.humidity} %`,
             wind: `${data.wind.speed} km/h`,
             weather: data.weather[0].main,
             description: data.weather[0].description,
             date: `${data.dt_txt.split(' ')[0]}`,
             time: `${data.dt_txt.split(' ')[1]}`,
             icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
             
        })
    }else{
        return weatherData.push({
            city: res.city.name,
            temp: `${data.main.temp} °C`,
            clouds: `${data.clouds.all} %`,
            rain: `${data.rain['3h']} mm`,
            snow: `${data.snow['3h']} mm`,
            pressure: `${data.main.pressure} hPa`,
            humidity: `${data.main.humidity} %`,
            wind: `${data.wind.speed} km/h`,
            weather: data.weather[0].main,
            description: data.weather[0].description,
            date: `${data.dt_txt.split(' ')[0]}`,
            time: `${data.dt_txt.split(' ')[1]}`,
            icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
            
       })
    }
    })

    return weatherData;
}


export function cordsUrl(){
    return `http://api.openweathermap.org/data/2.5/forecast?lat=${localStorage.getItem('latitude')}&lon=${localStorage.getItem('longitude')}&mode=json&units=metric${apiKey}`
}

export function cityUrl(city){
    return `http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&units=metric&APPID=6d99186162ab69f549aae9f7f584c075`
}