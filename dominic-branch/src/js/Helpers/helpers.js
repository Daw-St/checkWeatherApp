import axios from "axios";

const apiKey = "&APPID=6d99186162ab69f549aae9f7f584c075";

export default (city, longitude, latitude) => {
  if (city) {
    console.log(city);
    return axios
      .get(cityUrl(city))
      .then(res => res.data)
      .catch(err => console.log(err));
  } else if (longitude && latitude) {
    console.log(longitude);
    return axios
      .get(cordsUrl(latitude, longitude))
      .then(res => res.data)
      .catch(err => console.log(err));
  }
};

export function formatData(res, city) {
  let weatherData = [];
  console.log("list", res.list);
  res.list.map((data, index) => {
    if (city) {
      console.log("data", data);
      return weatherData.push({
        city: city,
        temp: `${Math.round(data.main.temp)} °C`,
        clouds: `${data.clouds.all}%`,
        rain: data.rain["3h"]
          ? `${Math.round(data.rain["3h"] * 100) / 100} mm`
          : "0 mm",
        snow: data.snow["3h"]
          ? `${Math.round(data.snow["3h"] * 100) / 100} mm`
          : "0 mm",
        pressure: `${Math.round(data.main.pressure * 100) / 100} hPa`,
        humidity: `${data.main.humidity}%`,
        wind: `${Math.round(data.wind.speed * 3.6)} km/h`,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        date: `${data.dt_txt.split(" ")[0]}`,
        time: `${data.dt_txt.split(" ")[1]}`,
        icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
      });
    } else {
      return weatherData.push({
        city: res.city.name,
        temp: `${Math.round(data.main.temp)} °C`,
        clouds: `${data.clouds.all} %`,
        rain:
          data.rain || data.rain["3h"]
            ? `${Math.round(data.rain["3h"] * 100) / 100} mm`
            : "0 mm",
        snow: data.snow["3h"]
          ? `${Math.round(data.snow["3h"] * 100) / 100} mm`
          : "0 mm",
        pressure: `${Math.round(data.main.pressure * 100) / 100} hPa`,
        humidity: `${data.main.humidity} %`,
        wind: `${Math.round(data.wind.speed * 3.6)} km/h`,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        date: `${data.dt_txt.split(" ")[0]}`,
        time: `${data.dt_txt.split(" ")[1]}`,
        icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
      });
    }
  });

  return weatherData;
}

export function formatWeatherData(res, city) {
  let weatherData = [];

  console.log("list", res);

  res.map((data, index) => {
    console.log(city);

    return weatherData.push({
      City: city,
      Date: data.Date.slice(0, 10),
      TempMax: `${Math.round(data.Temperature.Maximum.Value)}°C`,
      TempMin: `${Math.round(data.Temperature.Minimum.Value)}°C`,
      Moon: {
        Rise: data.Moon.Rise.slice(11, 16),
        Set: data.Moon.Set.slice(11, 16)
      },
      Sun: {
        Rise: data.Sun.Rise.slice(11, 16),
        Set: data.Sun.Set.slice(11, 16)
      },
      Day: {
        Icon: data.Day.Icon,
        HoursOfPrecipitation: data.Day.HoursOfPrecipitation,
        HoursOfRain: data.Day.HoursOfRain,
        HoursOfSnow: data.Day.HoursOfSnow,
        Clouds: `${data.Day.CloudCover}%`,
        Ice: `${data.Day.Ice.Value}`,
        IconPhrase: data.Day.IconPhrase,
        ShortPhrase: data.Day.ShortPhrase,
        LongPhrase: data.Day.LongPhrase,
        PrecipitationProbability: data.Day.PrecipitationProbability,
        Rain: `${data.Day.Rain.Value} mm`,
        Snow: `${data.Day.Snow.Value} cm`,
        TotalLiquid: `${data.Day.TotalLiquid.Value} mm`,
        SnowProbability: data.Day.SnowProbability,
        ThunderstormProbability: data.Day.ThunderstormProbability,
        Wind: {
          Direction: data.Day.Wind.Direction.Localized,
          Speed: `${data.Day.Wind.Speed.Value} km/h`,
          WindGust: `${data.Day.WindGust.Speed.Value} km/h`
        }
      },
      Night: {
        Icon: data.Night.Icon,
        HoursOfPrecipitation: data.Night.HoursOfPrecipitation,
        HoursOfRain: data.Night.HoursOfRain,
        HoursOfSnow: data.Night.HoursOfSnow,
        Clouds: `${data.Night.CloudCover}%`,
        Ice: `${data.Night.Ice.Value}`,
        IconPhrase: data.Night.IconPhrase,
        ShortPhrase: data.Night.ShortPhrase,
        LongPhrase: data.Night.LongPhrase,
        PrecipitationProbability: data.Night.PrecipitationProbability,
        Rain: `${data.Night.Rain.Value} mm`,
        Snow: `${data.Night.Snow.Value} cm`,
        TotalLiquid: `${data.Night.TotalLiquid.Value} mm`,
        SnowProbability: data.Night.SnowProbability,
        ThunderstormProbability: data.Night.ThunderstormProbability,
        Wind: {
          Direction: data.Night.Wind.Direction.Localized,
          Speed: `${data.Night.Wind.Speed.Value} km/h`,
          WindGust: `${data.Night.WindGust.Speed.Value} km/h`
        }
      }
    });
  });
  return weatherData;
}

export function currentDays(weatherData) {
  const currentDate = new Date();
  
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // getDay will return us current day, inside days.slice for example if current day is Wednesday it will return us [wed, thu, fir, sat]
  let fromCurrentDay = days.slice(currentDate.getDay());

  // if fromCurrentDay contains less than 5 day we have to complete the missing elements to get [wed, thu, fir, sat, sun] etc it depends what current day it is
  if (fromCurrentDay.length < 5) {
    let tmp = 5 - fromCurrentDay.length;
    for (let i = 0; i < tmp; i++) {
      fromCurrentDay.push(days[i]);
    }
  }

  return data.map( (item, index) =>{
      if(index === 0){
      item.WeekDay = 'Today'
      return item
      }
      else{
       item.WeekDay = fromCurrentDay[index];
       return item
      }
  })
}

export function currentIcon(weatherData){
  
    const weatherIcon = [
{'Sunny': 'wi wi-day-sunny' },
{'Mostly Sunny': 'wi wi-day-sunny'},
{'Partly Sunny':'wi wi-day-sunny-overcast'},
{'Intermittent Clouds': 'wi wi-day-sunny-overcast'},
{'Hazy Sunshine': 'wi wi-day-haze'},
{'Mostly Cloudy': 'wi wi-day-cloudy'},
{'Cloudy': 'wi wi-cloudy'},
{'Dreary (Overcast)': 'wi wi-cloudy'},
{'Fog': 'wi wi-fog'},
{'Showers': 'wi wi-showers'},
{'Mostly Cloudy w/ Showers': 'wi wi-day-showers'},
{'Partly Sunny w/ Showers': 'wi wi-day-showers'},
{'T-Storms': 'wi wi-thunderstorm'},
{'Mostly Cloudy w/ T-Storms':'wi wi-day-thunderstorm'},
{'Partly Sunny w/ T-Storms': 'wi wi-day-thunderstorm'},
{'Rain': 'wi wi-rain'},
{'Flurries': 'wi wi-snow'},
{'Mostly Cloudy w/ Flurries': 'wi wi-day-snow'},
{'Partly Sunny w/ Flurries': 'wi wi-day-snow'},
{'Snow': 'wi wi-snow'},
{'Mostly Cloudy w/ Snow': 'wi wi-day-snow'},
{'Ice': 'wi wi-snowflake-cold'},
{'Sleet': 'wi wi-sleet'},
{'Freezing Rain': 'wi wi-rain'},
{'Rain and Snow': 'wi wi-rain-mix'},
{'Hot': 'wi wi-thermometer'},
{'Cold': 'wi wi-thermometer-exterior'},
{'Windy': 'wi wi-strong-wind'},
{'Clear': 'wi wi-night-clear'},
{'Mostly Clear': 'wi wi-night-clear'},
{'Partly Cloudy': 'wi-night-alt-partly-cloudy'},
{'Intermittent Clouds': 'wi-night-alt-partly-cloudy'},
{'Hazy Moonlight': 'wi wi-night-fog'},
{'Mostly Cloudy':'wi wi-night-alt-cloudy'},
{'Partly Cloudy w/ Showers': 'wi wi-night-alt-showers'},
{'Mostly Cloudy w/ Showers': 'wi wi-night-alt-showers'},
{'Partly Cloudy w/ T-Storms': 'wi wi-night-alt-thunderstorm'},
{'Mostly Cloudy w/ T-Storms': 'wi wi-night-alt-thunderstorm'},
{'Mostly Cloudy w/ Flurries':'wi wi-night-alt-snow'},
{'Mostly Cloudy w/ Snow':'wi wi-night-alt-snow'},
    ]

}

export function cordsUrl() {
  return `http://api.openweathermap.org/data/2.5/forecast?lat=${localStorage.getItem(
    "latitude"
  )}&lon=${localStorage.getItem("longitude")}&mode=json&units=metric${apiKey}`;
}

export function cityUrl(city) {
  return `http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&units=metric&APPID=6d99186162ab69f549aae9f7f584c075`;
}
