import React from "react";
export default function windModule(props){
  return (
    <div className="key key-2">
    <div className="wind-module anim-show mod mod-2" >
   
    <div className="wind-details-container">
      <ul className="wind-stats">
        <li>Winds from the</li>
        <li>{props.day[props.time].Wind.Direction} {props.day[props.time].Wind.Speed}</li>
        <li>Guts: {props.day[props.time].Wind.WindGust}</li>
      </ul>
      <div className="wind-icon">
        <i className={`wi wi-wind wi-from-${String(props.day[props.time].Wind.Direction).toLocaleLowerCase()}`}></i>
      </div>
    </div>
    <ul className="weather-stats">
      <li>Clouds: {props.day[props.time].Clouds}</li>
      <li>Precipitation: {props.day[props.time].TotalLiquid}</li>
      <li>Rain: {props.day[props.time].Rain}</li>
      <li>Snow: {props.day[props.time].Snow}</li>
      <li>Thunderstorms: {props.day[props.time].ThunderstormProbability}%</li>
      <li>Hours of Precipitation: {props.day[props.time].HoursOfPrecipitation} hrs</li>
      <li>Hours of Rain: {props.day[props.time].HoursOfRain} hrs</li>
      <li></li>
    </ul>
    </div>
    </div>
  );
};


