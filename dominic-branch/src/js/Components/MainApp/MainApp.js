import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { formatWeatherData } from '../../Helpers/helpers';


import SearchBar from '../SearchBar/SearchBar';
import VideoBackground from '../VideoBackground/VideoBackground';
import WeatherList from '../WeatherList/WeatherList';
import WeatherDetails from '../WeatherDetails/WeatherDetails';

export default class MainApp extends Component{
    constructor(props){
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0,
            city : 'Wrocław',
            weatherData: null,
            geoCity: '',
            chosenCard: 0,
            cardId: 0,
        }
    }
    fetchData = () =>{
        axios.get(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=L1PICh0zcth59rE0BFf4GTGXOoAnucGj&q=${this.state.city}`)
        .then(res => axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${res.data[0].Key}?apikey=L1PICh0zcth59rE0BFf4GTGXOoAnucGj&details=true&metric=true`)
        .then(res =>{
           const formatedData = formatWeatherData(res.data.DailyForecasts, this.state.city);
           this.setState({ weatherData: formatedData})
       }))
    }
    
    componentDidMount(){
         this.fetchData();
    }  
    
        render(){
          if(this.state.weatherData){
            return(
                <Fragment>
                <VideoBackground data='homeVideo'/>
                    <SearchBar setCity={city => this.setState({ city : city}, this.fetchData)} />
                    <WeatherList cardId={(id, day) => this.setState({ cardId: id, dayToShow: day})} data={this.state.weatherData}/>
                    <WeatherDetails card={this.state.weatherData[this.state.cardId]} />
                </Fragment>
            )
          }
          else{
            return <div></div>
          }
        }
}


  

