import React, { Component } from "react";
import CardElement from "../CardElement/CardElement";
import { currentDays, currentIcon } from "../../Helpers/helpers";

import DetailsModule from '../DetailsModule/DetailsModule';
import WindModule from '../WindModule/WindModule';
import RiseModule from '../RiseModule/RiseModule';


export default class WeatherDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleTime : "Day",
    }
    this.eventInput;
  }



  componentDidMount(){
    this.eventInput = document.getElementById('dn')
    this.eventInput.addEventListener('click', this.onChecked);
  }

  componentWillUnmount(){
    document.removeEventListener('click', this.onChecked)
  }

  onChecked = e=>{
    if(e.currentTarget.checked)
    this.setState({ toggleTime : 'Night', statsToShow: this.props.card.Night})
    else
    this.setState({ toggleTime : 'Day', statsToShow: this.props.card.Day})

  
  }

  render() {
  
    return (
      <div className="weather-forecast-details tab">

      <DetailsModule time={this.state.toggleTime} day={this.props.card} />
      <WindModule day={this.props.card} time={this.state.toggleTime} />
      <RiseModule day={this.props.card}/>
      </div>
    );
  }
}


