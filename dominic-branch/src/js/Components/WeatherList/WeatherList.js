import React, { Component } from "react";
import CardElement from "../CardElement/CardElement";
import { currentDays, currentIcon } from "../../Helpers/helpers";


//let chosen = ''
export default class WeatherList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenCard : 0,
    }
    this.events = [];
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

  renderList = () => {
    //const tmpObj = currentIcon(currentDays(obj));
    //console.log(tmpObj);
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
    //document.querySelector('.tab').addEventListener('animationend', this.removeTransition);
  }

  componentWillUnmount(){
    document.removeEventListener('click', this.onClick)
    document.removeEventListener('animationend', this.removeTransition)
  }
  

  onClick = e =>{
    //console.log(e.currentTarget.dataset.id);
    const id = e.currentTarget.dataset.id;
    //console.log(e.currentTarget);
    const lastCard = document.getElementById(`card-${this.state.chosenCard}`);
    //console.log(lastCard);
    lastCard.classList.remove('focus-card')
    e.currentTarget.classList.add("focus-card");

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.classList.add('blank', 'fadeIn'));
   // document.querySelector('.tab').classList.add('fadeIn');
    //console.log(doc[0]);

    this.props.cardId(id);
    this.setState({chosenCard: id})
  }

  removeTransition = e =>
  {

    if(e.animationName !== 'fadeIn' || e.type !=='animationend') return;
    console.log(e.target.classList.remove('blank', 'fadeIn'));
  }


  render() {
    //console.log(this.state.chosenCard);
    return (
      <div className="weather-forecast-list">
        <div className="card-wrapper">{this.renderList()}</div>
      </div>
    );
  }
}




