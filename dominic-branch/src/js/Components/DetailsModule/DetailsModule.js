import React from "react";
export default function detailsModule(props){
  return (
    <div className="key key-1">
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
            <h3 className="tlt"></h3>
              <span className="large-temp">
                {props.time ==='Day'? props.day.TempMax : props.day.TempMin}
                <span className="setting">{props.time === 'Day'? 'HI' : 'LO'}</span>
              </span>
              <span className="real-feel">RealFeel® {props.time ==='Day'? props.day.RealFeelTemperature.Max : props.day.RealFeelTemperature.Min}</span>
              <span className="precip">Precipitation {props.day[props.time].PrecipitationProbability}%</span>
            </div>
            </div>
            <div className="day-item day-details-icon">
              <i className={props.time === 'Day' ? props.day.DayIcon : props.day.NightIcon}></i>
            </div>
          </div>
          <div className="day-details-cond">
            <div>{props.day[props.time].LongPhrase}</div>
            <div className="air-stats">Air Quality: {props.day.AirQuality.Category} ({props.day.AirQuality.Type})</div>
            <div className="city-date-stats">{props.day.City} <span className="date-stats">{props.day.DateToShow}</span></div>
          </div>
          </div>
      </div>
        </div>
  );
};