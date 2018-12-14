import axios from "axios";

const apiKey = "&APPID=6d99186162ab69f549aae9f7f584c075";

// export default (city, longitude, latitude) => {
//   if (city) {
//     console.log(city);
//     return axios
//       .get(cityUrl(city))
//       .then(res => res.data)
//       .catch(err => console.log(err));
//   } else if (longitude && latitude) {
//     console.log(longitude);
//     return axios
//       .get(cordsUrl(latitude, longitude))
//       .then(res => res.data)
//       .catch(err => console.log(err));
//   }
// };

// export function formatData(res, city) {
//   let weatherData = [];
//   console.log("list", res.list);
//   res.list.map((data, index) => {
//     if (city) {
//       console.log("data", data);
//       return weatherData.push({
//         city: city,
//         temp: `${Math.round(data.main.temp)} °C`,
//         clouds: `${data.clouds.all}%`,
//         rain: data.rain["3h"]
//           ? `${Math.round(data.rain["3h"] * 100) / 100} mm`
//           : "0 mm",
//         snow: data.snow["3h"]
//           ? `${Math.round(data.snow["3h"] * 100) / 100} mm`
//           : "0 mm",
//         pressure: `${Math.round(data.main.pressure * 100) / 100} hPa`,
//         humidity: `${data.main.humidity}%`,
//         wind: `${Math.round(data.wind.speed * 3.6)} km/h`,
//         weather: data.weather[0].main,
//         description: data.weather[0].description,
//         date: `${data.dt_txt.split(" ")[0]}`,
//         time: `${data.dt_txt.split(" ")[1]}`,
//         icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
//       });
//     } else {
//       return weatherData.push({
//         city: res.city.name,
//         temp: `${Math.round(data.main.temp)} °C`,
//         clouds: `${data.clouds.all} %`,
//         rain:
//           data.rain || data.rain["3h"]
//             ? `${Math.round(data.rain["3h"] * 100) / 100} mm`
//             : "0 mm",
//         snow: data.snow["3h"]
//           ? `${Math.round(data.snow["3h"] * 100) / 100} mm`
//           : "0 mm",
//         pressure: `${Math.round(data.main.pressure * 100) / 100} hPa`,
//         humidity: `${data.main.humidity} %`,
//         wind: `${Math.round(data.wind.speed * 3.6)} km/h`,
//         weather: data.weather[0].main,
//         description: data.weather[0].description,
//         date: `${data.dt_txt.split(" ")[0]}`,
//         time: `${data.dt_txt.split(" ")[1]}`,
//         icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
//       });
//     }
//   });

//   return weatherData;
// }

export function formatWeatherData(res, city) {
  let weatherData = [];

  console.log("list", res);

  res.map((data, index) => {
    console.log(data);
    return weatherData.push({
      City: city,
      AirQuality: {
        Category: data.AirAndPollen[0].Category,
        Type: data.AirAndPollen[0].Type
      },
      Date: data.Date.slice(0, 10),
      DateToShow: dateConverter(data.Date.slice(0, 10)),
      TempMax: `${Math.round(data.Temperature.Maximum.Value)}°`,
      TempMin: `${Math.round(data.Temperature.Minimum.Value)}°`,
      RealFeelTemperature: {
        Max: `${Math.round(data.RealFeelTemperature.Maximum.Value)}°`,
        Min: `${Math.round(data.RealFeelTemperature.Minimum.Value)}°`
      },
      Moon: {
        Rise: data.Moon.Rise.slice(11, 16),
        Set: data.Moon.Set.slice(11, 16),
        Duration: hoursCounter(data.Moon.Rise.slice(11, 16), data.Moon.Set.slice(11, 16)),

      },
      Sun: {
        Rise: data.Sun.Rise.slice(11, 16),
        Set: data.Sun.Set.slice(11, 16),
        Duration: hoursCounter(data.Sun.Rise.slice(11, 16), data.Sun.Set.slice(11, 16)),
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
  console.log("mod", currentIcon(currentDays(weatherData)));
  return currentIcon(currentDays(weatherData));
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

  return weatherData.map((item, index) => {
    if (index === 0) {
      item.WeekDay = "Today";
      return item;
    } else {
      item.WeekDay = fromCurrentDay[index];
      return item;
    }
  });
}






export function currentIcon(weatherData) {

  const weatherIcon = [
    { 1: "wi wi-day-sunny" },
    { 2: "wi wi-day-sunny" },
    { 3: "wi wi-day-sunny-overcast" },
    { 4: "wi wi-day-sunny-overcast" },
    { 5: "wi wi-day-haze" },
    { 6: "wi wi-day-cloudy" },
    { 7: "wi wi-cloudy" },
    { 8: "wi wi-cloudy" },
    null,
    null,
    { 11: "wi wi-fog" },
    { 12: "wi wi-showers" },
    { 13: "wi wi-day-showers" },
    { 14: "wi wi-day-showers" },
    { 15: "wi wi-thunderstorm" },
    { 16: "wi wi-day-thunderstorm" },
    { 17: "wi wi-day-thunderstorm" },
    { 18: "wi wi-rain" },
    { 19: "wi wi-snow" },
    { 20: "wi wi-day-snow" },
    { 21: "wi wi-day-snow" },
    { 22: "wi wi-snow" },
    { 23: "wi wi-day-snow" },
    { 24: "wi wi-snowflake-cold" },
    { 25: "wi wi-sleet" },
    { 26: "wi wi-rain" },
    null,
    null,
    { 29: "wi wi-rain-mix" },
    { 30: "wi wi-thermometer" },
    { 31: "wi wi-thermometer-exterior" },
    { 32: "wi wi-strong-wind" },
    { 33: "wi wi-night-clear" },
    { 34: "wi wi-night-clear" },
    { 35: "wi wi-night-alt-partly-cloudy" },
    { 36: "wi wi-night-alt-partly-cloudy" },
    { 37: "wi wi-night-fog" },
    { 38: "wi wi-night-alt-cloudy" },
    { 39: "wi wi-night-alt-showers" },
    { 40: "wi wi-night-alt-showers" },
    { 41: "wi wi-night-alt-thunderstorm" },
    { 42: "wi wi-night-alt-thunderstorm" },
    { 43: "wi wi-night-alt-snow" },
    { 44: "wi wi-night-alt-snow" }
  ];

  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}`;
  const timeToSet = `${date.getHours() - 1}:${date.getMinutes()}`;







  return weatherData.map((item, index) => {
    let sunSet = item.Sun.Set;
    let sunRise = item.Sun.Rise;

    item.DayIcon = item.IconToShow =
      weatherIcon[item.Day.Icon - 1][item.Day.Icon];
    item.NightIcon = weatherIcon[item.Night.Icon - 1][item.Night.Icon];

    if ((timeToSet <= sunSet && time >= sunRise) || index !== 0) {
      //console.log('day',item.Day.Icon);
      item.IconToShow = weatherIcon[item.Day.Icon - 1][item.Day.Icon];
      //console.log(weatherIcon[item.Day.Icon -1][item.Day.Icon]);
      return item;
    } else {
      item.IconToShow = weatherIcon[item.Night.Icon - 1][item.Night.Icon];
      //console.log(weatherIcon[item.Night.Icon -1]);
      // console.log( weatherIcon[item.Night.Icon -1][item.Night.Icon]);
      //console.log('night',item.Night.Icon);

      return item;
    }
  });
}





export function cordsUrl() {
  return `http://api.openweathermap.org/data/2.5/forecast?lat=${localStorage.getItem(
    "latitude"
  )}&lon=${localStorage.getItem("longitude")}&mode=json&units=metric${apiKey}`;
}

export function cityUrl(city) {
  return `http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&units=metric&APPID=6d99186162ab69f549aae9f7f584c075`;
}










export function hoursCounter(time1, time2) {
  const timeSplit = time1.split(":");
  const timeSplit2 = time2.split(":");

  const date1 = new Date();
  const date2 = new Date();

  date1.setHours(timeSplit[0], timeSplit[1]);
  date2.setHours(timeSplit2[0], timeSplit2[1]);

  const hours = (Math.abs(date1 - date2) / 36e5).toFixed(2);

  const computedHours = `${hours.toString().split(".")[0]}.${(
    hours.toString().split(".")[1] * 0.6
  ).toFixed(0)}`;

  if (computedHours.split(".")[1].length === 1)
    return `${computedHours.split(".")[0]}.0${computedHours.split(".")[1]}`;

  return computedHours;
}







export function dateConverter(date){

  const monthNum = date.slice(5,7);
  const day = date.slice(8,10)

  return `${month[monthNum - 1]} ${day}`

}


var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";
