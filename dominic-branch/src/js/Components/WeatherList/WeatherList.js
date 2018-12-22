import React, { Component } from "react";
import CardElement from "../CardElement/CardElement";

export default class WeatherList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenCard : 0,
    }
    this.events = [];
  }


  renderList = () => {
    if (this.props.data)
      return this.props.data.map((day, index) => {
        return <CardElement cardNum={index} key={index} day={day} />;
      });

       

  };
  componentDidMount(){
    for (let i = 0; i < 5; i++) {
      this.events[i] = document.getElementById(`card-${i}`).addEventListener('click', this.onClick)
    }
    document.getElementById(`card-${this.state.chosenCard}`).classList.add('focus-card');
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('animationend', this.removeTransition))
  }

  componentWillUnmount(){
    document.removeEventListener('click', this.onClick)
    document.removeEventListener('animationend', this.removeTransition)
  }
  

  onClick = e =>{
    const id = e.currentTarget.dataset.id;
    const lastCard = document.getElementById(`card-${this.state.chosenCard}`);
    lastCard.classList.remove('focus-card')
    e.currentTarget.classList.add("focus-card");

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.classList.add('blank', 'fadeIn'));

    this.props.cardId(id);
    this.setState({chosenCard: id})
  }

  removeTransition = e =>
  {

    if(e.animationName !== 'fadeIn' || e.type !=='animationend') return;
    e.target.classList.remove('blank', 'fadeIn');
  }


  render() {
    return (
      <div className="weather-forecast-list">
        <div className="card-wrapper">{this.renderList()}</div>
      </div>
    );
  }
}




