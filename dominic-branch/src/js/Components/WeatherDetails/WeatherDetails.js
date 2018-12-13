import React, { Component } from "react";
import CardElement from "../CardElement/CardElement";
import { currentDays, currentIcon } from "../../Helpers/helpers";

export default class WeatherDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleTime : "Day",
      statsToShow: {},
      wind: {}
    }
    this.eventInput;
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

  componentDidMount(){
    this.eventInput = document.getElementById('dn')
    this.eventInput.addEventListener('click', this.onChecked);
    console.log('event',this.eventInput);
    this.setState({ statsToShow: this.props.card.Day, wind : this.props.card.Day.Wind})
   

  }

  onChecked = e=>{
    if(e.currentTarget.checked)
    this.setState({ toggleTime : 'Night', statsToShow: this.props.card.Night, wind : this.props.card.Night.Wind})
    else
    this.setState({ toggleTime : 'Day', statsToShow: this.props.card.Day, wind : this.props.card.Day.Wind})

  
  }

  render() {
    console.log('stats',this.state.statsToShow);
    console.log(this.state.statsToShow.Wind);
    
    if (this.props.card) {
      console.log("cardddd", this.props.card);
    }
    console.log('wind',this.state.wind.Direction);
  
    return (
      <div className="weather-forecast-details">
        <div className="details-module anim-show mod-1">

          <div className="toggle-time">
            <div className="toggleWrapper">
              <input type="checkbox" className="dn" id="dn" />
              <label htmlFor="dn" className="toggle">
                <span className="toggle__handler">
                  <span className="crater crater--1" />
                  <span className="crater crater--2" />
                  <span className="crater crater--3" />
                </span>
                <span className="star star--1" />
                <span className="star star--2" />
                <span className="star star--3" />
                <span className="star star--4" />
                <span className="star star--5" />
                <span className="star star--6" />
              </label>
            </div>
          </div>

          <div className="day-details-wrapper">
          <div className="day-elements-wrapper" >
            <div className="day-item day-details-temp">

            <div className="temp">
            <h3>Day</h3>
              <span className="large-temp">
                {this.props.card.TempMax}
                <span className="setting">Hi</span>
              </span>
              <span className="real-feel">RealFeel® {this.state.toggleTime ==='Day'? this.props.card.RealFeelTemperature.Max: this.props.card.RealFeelTemperature.Min}</span>
              <span className="precip">Precipitation {this.state.statsToShow.PrecipitationProbability}%</span>
            </div>
            </div>
            <div className="day-item day-details-icon">
              <i className={this.state.toggleTime === 'Day' ? this.props.card.DayIcon : this.props.card.NightIcon}></i>
            </div>
          </div>
          <div className="day-details-cond">
            <div>{this.state.statsToShow.LongPhrase}</div>
            <div className="air-stats">Air Quality: {this.props.card.AirQuality.Category} ({this.props.card.AirQuality.Type})</div>
          </div>
          </div>

        </div>

        <div className="wind-module anim-show mod-2" >
        <div className="wind-details-container">
          <ul className="wind-stats">
            <li>Winds from the</li>
            <li>{this.state.wind.Direction} {this.state.wind.Speed}</li>
            <li>Guts: {this.state.wind.WindGust}</li>
          </ul>
          <div className="wind-icon">
            <i className={`wi wi-wind wi-from-${this.state.wind.Direction}`}></i>
          </div>
        </div>
        <ul className="weather-stats">
          <li>Clouds: {this.state.statsToShow.Clouds}</li>
          <li>Precipitation: {this.state.statsToShow.TotalLiquid}</li>
          <li>Rain: {this.state.statsToShow.Rain}</li>
          <li>Snow: {this.state.statsToShow.Snow}</li>
          <li>Thunderstorms: {this.state.statsToShow.ThunderstormProbability}%</li>
          <li>Hours of Precipitation: {this.state.statsToShow.HoursOfPrecipitation} hrs</li>
          <li>Hours of Rain: {this.state.statsToShow.HoursOfRain} hrs</li>
          <li></li>
        </ul>
        </div>

        <div className="rise-module anim-show mod-3">

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
                <li>
                  Duration: <span>{this.props.card.Sun.Duration} hr</span>
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
                <li>
                  Duration: <span>{this.props.card.Moon.Duration} hr</span>
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
