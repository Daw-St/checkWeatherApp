import React, { Component } from "react";

export default function ListElement(props) {
  return (
    <div className={`card anim-flip anim-flip-card-${props.cardNum}`}>
      <header>
        <h1 className="card-header">{props.day.WeekDay}</h1>
      </header>
      <p className="card-temp box-highlight">
          <span className="large-temp">{props.day.TempMax}</span>
          <span className="small-temp">/{props.day.TempMin}</span>
      </p>
      <div className="card-icon">
        <i className={props.day.IconToShow} />
      </div>

      <p className="card-info">{props.day.Day.ShortPhrase}</p>
    </div>
  );
}
