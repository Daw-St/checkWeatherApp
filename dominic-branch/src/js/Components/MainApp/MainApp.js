import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

const baseURL = "http://api.openweathermap.org/data/2.5/forecast?q=";
const apiKey = '&APPID=6d99186162ab69f549aae9f7f584c075';

import SearchBar from '../SearchBar/SearchBar';
import VideoBackground from '../VideoBackground/VideoBackground';

export default class MainApp extends Component{
    constructor(props){
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0,
            weatherData: [],
        }
    }
    
    componentDidMount(){
         navigator.geolocation.getCurrentPosition(pos =>
            this.setState({latitude: pos.coords.latitude, longitude: pos.coords.longitude})
         )
     
    }  
    
        render(){
            return(
                <Fragment>
                <VideoBackground data='homeVideo'/>
                    <div>Test </div>
                    <SearchBar/>
                </Fragment>
            )
        }
}


