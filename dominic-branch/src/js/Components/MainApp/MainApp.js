import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { cityUrl, cordsUrl, formatData, formatWeatherData } from '../../Helpers/helpers';


import SearchBar from '../SearchBar/SearchBar';
import VideoBackground from '../VideoBackground/VideoBackground';
import WeatherList from '../WeatherList/WeatherList';

export default class MainApp extends Component{
    constructor(props){
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0,
            city : 'Wrocław',
            weatherData: null,
            geoCity: '',
            
        }
    }
    fetchData = () =>{
        
        // axios.get(cityUrl(this.state.city)).then(res => {
        //     const formatedData = formatData(res.data, this.state.city);
        //    this.setState({ weatherData: formatedData})
        // });
           
        // console.log(cityUrl(this.state.weatherData));
       
        //accuweather api 
    //     axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=L1PICh0zcth59rE0BFf4GTGXOoAnucGj&q=${this.state.city}`)
    //     .then(res => axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${res.data[0].Key}?apikey=L1PICh0zcth59rE0BFf4GTGXOoAnucGj&details=true&metric=true`)
    //     .then(res =>{
    //        const formatedData = formatWeatherData(res.data.DailyForecasts, this.state.city);
    //        this.setState({ weatherData: formatedData})
    //    }))
    }
    
    componentDidMount(){
         navigator.geolocation.getCurrentPosition(pos =>{
            this.setState({latitude: pos.coords.latitude, longitude: pos.coords.longitude})
            localStorage.setItem('latitude', pos.coords.latitude),
            localStorage.setItem('longitude', pos.coords.longitude) 
         })

        //  if(localStorage.getItem('longitude')){
        //      axios.get(cordsUrl()).then(res => {
        //         const formatedData = formatData(res.data);
        //        this.setState({ weatherData: formatedData})
        //     });
        //  }else{
        //     axios.get(cityUrl(this.state.city)).then(res => {
        //         const formatedData = formatData(res.data, this.state.city);
        //        this.setState({ weatherData: formatedData})
        //     });
        //  }

         this.fetchData();
        
    }  
    
        render(){
            console.log(this.state.weatherData);
            return(
                <Fragment>
                <VideoBackground data='homeVideo'/>
                    <SearchBar setCity={city => this.setState({ city : city}, this.fetchData)} />
                    <WeatherList data={this.state.weatherData}/>
                </Fragment>
            )
        }
}


