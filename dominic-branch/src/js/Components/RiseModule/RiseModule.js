import React from "react";
export default function riseModule(props){
    console.log(props);
  return (
    <div className="rise-module anim-show mod-3">

    <div className="sun-module">
      <div className="sun-details">
        <div className="feature-title">
          <h3>Sunrise/Sunset</h3>
        </div>
        <ul className="time-period">
          <li>
            Sunrise: <span>{props.day.Sun.Rise}</span>
          </li>
          <li>
            Sunset: <span>{props.day.Sun.Set}</span>
          </li>
          <li>
            Duration: <span>{props.day.Sun.Duration} hr</span>
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
            Moonrise: <span>{props.day.Moon.Rise}</span>
          </li>
          <li>
            Moonset: <span>{props.day.Moon.Set}</span>
          </li>
          <li>
            Duration: <span>{props.day.Moon.Duration} hr</span>
          </li>
        </ul>
      </div>
      <i className="rise-icon wi wi-night-clear" />
    </div>
  </div>
  );
};