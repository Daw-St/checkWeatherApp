import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { cityUrl, cordsUrl, formatData } from '../../Helpers/helpers';


import SearchBar from '../SearchBar/SearchBar';
import VideoBackground from '../VideoBackground/VideoBackground';

export default class MainApp extends Component{
    constructor(props){
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0,
            city : 'Warszawa',
            weatherData: null,
            
        }
    }
    fetchData = () =>{
        
        axios.get(cityUrl(this.state.city)).then(res => {
            const formatedData = formatData(res.data, this.state.city);
           this.setState({ weatherData: formatedData})
        });
           
        console.log(cityUrl(this.state.weatherData));
    }
    
    componentDidMount(){
         navigator.geolocation.getCurrentPosition(pos =>{
            this.setState({latitude: pos.coords.latitude, longitude: pos.coords.longitude})
            localStorage.setItem('latitude', pos.coords.latitude),
            localStorage.setItem('longitude', pos.coords.longitude) 
         })

         if(localStorage.getItem('longitude')){
             axios.get(cordsUrl()).then(res => {
                const formatedData = formatData(res.data);
               this.setState({ weatherData: formatedData})
            });
         }else{
            axios.get(cityUrl(this.state.city)).then(res => {
                const formatedData = formatData(res.data, this.state.city);
               this.setState({ weatherData: formatedData})
            });
         }
       
     
    }  
    
        render(){
            console.log(this.state.weatherData);
            return(
                <Fragment>
                <VideoBackground data='homeVideo'/>
                    <SearchBar setCity={city => this.setState({ city : city}, this.fetchData)} />
                </Fragment>
            )
        }
}


