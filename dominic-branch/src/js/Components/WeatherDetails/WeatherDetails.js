import React, { Component } from "react";
import CardElement from "../CardElement/CardElement";
import { currentDays, currentIcon } from "../../Helpers/helpers";

export default class WeatherDetails extends Component {
  constructor(props) {
    super(props);
  }

  // renderList =()=>{
  //     console.log(this.props.data);
  //     if(this.props.data)
  //     return this.props.data.map( (item, index) =>{
  //         return (<ListElement cardNum={index} key={index} wind={item.Wind}
  //          date={item.date} city={item.city} tempMax={item.tempMax}
  //           tempMin={item.tempMin}  clouds={item.Clouds}
  //      rain={item.rain} snow={item.snow} shortPhrase={item.ShortPhrase} snow={item.Snow}

  //      />)
  //     })
  // }

  render() {
    console.log(this.props);
    if (this.props.card) {
      console.log("cardddd", this.props.card);
    }
    return (
      <div className="weather-forecast-details">
        <div className="details-module">
          <div className="toggle-time">
            <div class="toggleWrapper">
              <input type="checkbox" class="dn" id="dn" />
              <label for="dn" class="toggle">
                <span class="toggle__handler">
                  <span class="crater crater--1" />
                  <span class="crater crater--2" />
                  <span class="crater crater--3" />
                </span>
                <span class="star star--1" />
                <span class="star star--2" />
                <span class="star star--3" />
                <span class="star star--4" />
                <span class="star star--5" />
                <span class="star star--6" />
              </label>
            </div>
          </div>
          <div className="day-details-wrapper">
            <div className="day-details">8</div>
            <div className="day-details-icon">8</div>
          </div>
        </div>
        <div className="wind-module" />
        <div className="rise-modules">
          <div className="sun-module">
            <div className="sun-details">
              <div className="feature-title">
                <h3>Sunrise/Sunset</h3>
              </div>
              <ul className="time-period">
                <li>
                  Sunrise: <span>{this.props.card.Sun.Rise}</span>
                </li>
                <li>
                  Sunset: <span>{this.props.card.Sun.Set}</span>
                </li>
              </ul>
            </div>
            <i className="rise-icon wi wi-day-sunny" />
          </div>
          <div className="moon-module">
            <div className="moon-details">
              <div className="feature-title">
                <h3>Moonrise/Moonset</h3>
              </div>
              <ul className="time-period">
                <li>
                  Moonrise: <span>{this.props.card.Moon.Rise}</span>
                </li>
                <li>
                  Moonset: <span>{this.props.card.Moon.Set}</span>
                </li>
              </ul>
            </div>
            <i className="rise-icon wi wi-night-clear" />
          </div>
        </div>
      </div>
    );
  }
}

const obj = [
  {
    City: "Wrocław",
    Date: "2018-12-11",
    Day: {
      Icon: 29,
      Clouds: "92%",
      HoursOfPrecipitation: 7.5,
      HoursOfRain: 3.5,
      HoursOfSnow: 6,
      Ice: "0",
      IconPhrase: "Rain and snow",
      LongPhrase: "Rain and snow showers, accumulating a coating to 1 cm",
      PrecipitationProbability: 85,
      Rain: "3 mm",
      ShortPhrase: "Rain and snow showers",
      Snow: "0.5 cm",
      SnowProbability: 55,
      ThunderstormProbability: 0,
      TotalLiquid: "4 mm",
      Wind: {
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h"
      }
    },

    Moon: {
      Rise: "10:48",
      Set: "19:37"
    },
    Night: {
      Icon: 19,
      Clouds: "95%",
      HoursOfPrecipitation: 7,
      HoursOfRain: 0,
      HoursOfSnow: 7,
      Ice: "0",
      IconPhrase: "Snow",
      LongPhrase:
        "Snow at times, accumulating an additional 3-6 cm; roads could be slippery",
      PrecipitationProbability: 72,
      Rain: "0 mm",
      ShortPhrase: "Snow at times, 3-6 cm",
      Snow: "3.7 cm",
      SnowProbability: 72,
      ThunderstormProbability: 0,
      TotalLiquid: "4 mm",
      Wind: {
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h"
      }
    },
    Sun: {
      Rise: "07:45",
      Set: "15:45"
    },
    TempMax: "3°C",
    TempMin: "-1°C"
  },

  {
    City: "Wrocław",
    Date: "2018-12-12",
    Day: {
      Icon: 19,
      Clouds: "92%",
      HoursOfPrecipitation: 7.5,
      HoursOfRain: 3.5,
      HoursOfSnow: 6,
      Ice: "0",
      IconPhrase: "Rain and snow",
      LongPhrase: "Rain and snow showers, accumulating a coating to 1 cm",
      PrecipitationProbability: 85,
      Rain: "3 mm",
      ShortPhrase: "Rain and snow showers",
      Snow: "0.5 cm",
      SnowProbability: 55,
      ThunderstormProbability: 0,
      TotalLiquid: "4 mm",
      Wind: {
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h"
      }
    },

    Moon: {
      Rise: "10:48",
      Set: "19:37"
    },
    Night: {
      Icon: 8,
      Clouds: "95%",
      HoursOfPrecipitation: 7,
      HoursOfRain: 0,
      HoursOfSnow: 7,
      Ice: "0",
      IconPhrase: "Snow",
      LongPhrase:
        "Snow at times, accumulating an additional 3-6 cm; roads could be slippery",
      PrecipitationProbability: 72,
      Rain: "0 mm",
      ShortPhrase: "Snow at times, 3-6 cm",
      Snow: "3.7 cm",
      SnowProbability: 72,
      ThunderstormProbability: 0,
      TotalLiquid: "4 mm",
      Wind: {
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h"
      }
    },
    Sun: {
      Rise: "07:45",
      Set: "15:45"
    },
    TempMax: "3°C",
    TempMin: "-1°C"
  },

  {
    City: "Wrocław",
    Date: "2018-12-13",
    Day: {
      Icon: 7,
      Clouds: "92%",
      HoursOfPrecipitation: 7.5,
      HoursOfRain: 3.5,
      HoursOfSnow: 6,
      Ice: "0",
      IconPhrase: "Rain and snow",
      LongPhrase: "Rain and snow showers, accumulating a coating to 1 cm",
      PrecipitationProbability: 85,
      Rain: "3 mm",
      ShortPhrase: "Rain and snow showers",
      Snow: "0.5 cm",
      SnowProbability: 55,
      ThunderstormProbability: 0,
      TotalLiquid: "4 mm",
      Wind: {
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h"
      }
    },

    Moon: {
      Rise: "10:48",
      Set: "19:37"
    },
    Night: {
      Icon: 8,
      Clouds: "95%",
      HoursOfPrecipitation: 7,
      HoursOfRain: 0,
      HoursOfSnow: 7,
      Ice: "0",
      IconPhrase: "Snow",
      LongPhrase:
        "Snow at times, accumulating an additional 3-6 cm; roads could be slippery",
      PrecipitationProbability: 72,
      Rain: "0 mm",
      ShortPhrase: "Snow at times, 3-6 cm",
      Snow: "3.7 cm",
      SnowProbability: 72,
      ThunderstormProbability: 0,
      TotalLiquid: "4 mm",
      Wind: {
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h"
      }
    },
    Sun: {
      Rise: "07:45",
      Set: "15:45"
    },
    TempMax: "3°C",
    TempMin: "-1°C"
  },

  {
    City: "Wrocław",
    Date: "2018-12-14",
    Day: {
      Icon: 7,
      Clouds: "92%",
      HoursOfPrecipitation: 7.5,
      HoursOfRain: 3.5,
      HoursOfSnow: 6,
      Ice: "0",
      IconPhrase: "Rain and snow",
      LongPhrase: "Rain and snow showers, accumulating a coating to 1 cm",
      PrecipitationProbability: 85,
      Rain: "3 mm",
      ShortPhrase: "Rain and snow showers",
      Snow: "0.5 cm",
      SnowProbability: 55,
      ThunderstormProbability: 0,
      TotalLiquid: "4 mm",
      Wind: {
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h"
      }
    },

    Moon: {
      Rise: "10:48",
      Set: "19:37"
    },
    Night: {
      Icon: 8,
      Clouds: "95%",
      HoursOfPrecipitation: 7,
      HoursOfRain: 0,
      HoursOfSnow: 7,
      Ice: "0",
      IconPhrase: "Snow",
      LongPhrase:
        "Snow at times, accumulating an additional 3-6 cm; roads could be slippery",
      PrecipitationProbability: 72,
      Rain: "0 mm",
      ShortPhrase: "Snow at times, 3-6 cm",
      Snow: "3.7 cm",
      SnowProbability: 72,
      ThunderstormProbability: 0,
      TotalLiquid: "4 mm",
      Wind: {
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h"
      }
    },
    Sun: {
      Rise: "07:45",
      Set: "15:45"
    },
    TempMax: "3°C",
    TempMin: "-1°C"
  },

  {
    City: "Wrocław",
    Date: "2018-12-15",
    Day: {
      Icon: 6,
      Clouds: "92%",
      HoursOfPrecipitation: 7.5,
      HoursOfRain: 3.5,
      HoursOfSnow: 6,
      Ice: "0",
      IconPhrase: "Rain and snow",
      LongPhrase: "Rain and snow showers, accumulating a coating to 1 cm",
      PrecipitationProbability: 85,
      Rain: "3 mm",
      ShortPhrase: "Rain and snow showers",
      Snow: "0.5 cm",
      SnowProbability: 55,
      ThunderstormProbability: 0,
      TotalLiquid: "4 mm",
      Wind: {
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h"
      }
    },

    Moon: {
      Rise: "10:48",
      Set: "19:37"
    },
    Night: {
      Icon: 7,
      Clouds: "95%",
      HoursOfPrecipitation: 7,
      HoursOfRain: 0,
      HoursOfSnow: 7,
      Ice: "0",
      IconPhrase: "Snow",
      LongPhrase:
        "Snow at times, accumulating an additional 3-6 cm; roads could be slippery",
      PrecipitationProbability: 72,
      Rain: "0 mm",
      ShortPhrase: "Snow at times, 3-6 cm",
      Snow: "3.7 cm",
      SnowProbability: 72,
      ThunderstormProbability: 0,
      TotalLiquid: "4 mm",
      Wind: {
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h"
      }
    },
    Sun: {
      Rise: "07:45",
      Set: "15:45"
    },
    TempMax: "3°C",
    TempMin: "-1°C"
  }
];
