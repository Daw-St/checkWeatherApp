import React from "react";

export default function CardElement(props) {
  return (
    <div className={`card anim-flip anim-flip-card-${props.cardNum}`} id={`card-${props.cardNum}`} data-id={`${props.cardNum}`}  >
      <header>
        <h1 className="card-header">{props.day.WeekDay}</h1>
      </header>
      <p className="card-temp box-highlight">
          <span className="large-temp-card">{props.day.TempMax}</span>
          <span className="small-temp-card">/{props.day.TempMin}C</span>
      </p>
      <div className="card-icon">
        <i className={props.day.IconToShow} />
      </div>

      <p className="card-info">{props.day.Day.ShortPhrase}</p>
    </div>
  );
}
