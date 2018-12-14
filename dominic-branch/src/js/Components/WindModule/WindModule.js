import React from "react";
export default function windModule(props){
    console.log(props);
  return (
    <div className="wind-module anim-show mod-2" >
    <div className="wind-details-container">
      <ul className="wind-stats">
        <li>Winds from the</li>
        <li>{props.wind.Direction} {props.wind.Speed}</li>
        <li>Guts: {props.wind.WindGust}</li>
      </ul>
      <div className="wind-icon">
        <i className={`wi wi-wind wi-from-${props.wind.Direction}`}></i>
      </div>
    </div>
    <ul className="weather-stats">
      <li>Clouds: {props.stats.Clouds}</li>
      <li>Precipitation: {props.stats.TotalLiquid}</li>
      <li>Rain: {props.stats.Rain}</li>
      <li>Snow: {props.stats.Snow}</li>
      <li>Thunderstorms: {props.stats.ThunderstormProbability}%</li>
      <li>Hours of Precipitation: {props.stats.HoursOfPrecipitation} hrs</li>
      <li>Hours of Rain: {props.stats.HoursOfRain} hrs</li>
      <li></li>
    </ul>
    </div>
  );
};