import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { cityUrl, cordsUrl, formatData, formatWeatherData,currentIcon } from '../../Helpers/helpers';


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
        
        // axios.get(cityUrl(this.state.city)).then(res => {
        //     const formatedData = formatData(res.data, this.state.city);
        //    this.setState({ weatherData: formatedData})
        // });
           
        // console.log(cityUrl(this.state.weatherData));
       
        //accuweather api 
      //   axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=L1PICh0zcth59rE0BFf4GTGXOoAnucGj&q=${this.state.city}`)
      //   .then(res => axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${res.data[0].Key}?apikey=L1PICh0zcth59rE0BFf4GTGXOoAnucGj&details=true&metric=true`)
      //   .then(res =>{
      //      const formatedData = formatWeatherData(res.data.DailyForecasts, this.state.city);
      //      this.setState({ weatherData: formatedData})
      //  }))
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
        currentIcon(obj)
    }  
    
        render(){
          //console.log(this.state.weatherData);
            if(obj){          
            //console.log('id',obj[this.state.cardId]);
            }
            return(
                <Fragment>
                <VideoBackground data='homeVideo'/>
                    <SearchBar setCity={city => this.setState({ city : city}, this.fetchData)} />
                    <WeatherList cardId={(id) => this.setState({ cardId: id})} data={this.state.weatherData}/>
                    <WeatherDetails  card={obj[this.state.cardId]}/>
                </Fragment>
            )
        }
}

//<WeatherDetails card={this.state.chosenCard} data={this.state.weatherData[this.state.cardId]}/>
const obj = [
    {
      AirQuality:{
        Category: "Good",
        Type: "Particle Pollution"
      },
      RealFeelTemperature:{
        Max: "3°",
        Min: "-3°"
      },
      City: "Wrocław",
      Date: "2018-12-11",
      Day: {
        Icon: 29,
        Clouds: "92%",
        HoursOfPrecipitation: 7.5,
        HoursOfRain: 3.5,
        HoursOfSnow: 6,
        Ice: "0",
        IconPhrase: "Rain and snow",
        LongPhrase: "Rain and snow showers, accumulating a coating to 1 cm",
        PrecipitationProbability: 85,
        Rain: "3 mm",
        ShortPhrase: "Rain and snow showers",
        Snow: "0.5 cm",
        SnowProbability: 55,
        ThunderstormProbability: 0,
        TotalLiquid: "4 mm",
        Wind: {
          Direction: "WNW",
          Speed: "14.8 km/h",
          WindGust: "31.5 km/h"
        }
      },
  
      Moon: {
        Rise: "10:48",
        Set: "19:37",
        Duration: "9.55"
      },
      Night: {
        Icon: 19,
        Clouds: "95%",
        HoursOfPrecipitation: 7,
        HoursOfRain: 0,
        HoursOfSnow: 7,
        Ice: "0",
        IconPhrase: "Snow",
        LongPhrase: "Snow at times, accumulating an additional 3-6 cm; roads could be slippery",
        PrecipitationProbability: 72,
        Rain: "0 mm",
        ShortPhrase: "Snow at times, 3-6 cm",
        Snow: "3.7 cm",
        SnowProbability: 72,
        ThunderstormProbability: 0,
        TotalLiquid: "4 mm",
        Wind: {
          Direction: "WNW",
          Speed: "14.8 km/h",
          WindGust: "31.5 km/h"
        }
      },
      Sun: {
        Rise: "07:45",
        Set: "15:45",
        Duration: "7.58"
      },
      TempMax: "3°",
      TempMin: "-1°"
    },
  
    {
      AirQuality:{
      Category: "Good",
      Type: "Particle Pollution"
    },
    RealFeelTemperature:{
      Max: "3°",
      Min: "-3°"
    },
      City: "Wrocław",
      Date: "2018-12-12",
      Day: {
        Icon: 19,
        Clouds: "92%",
        HoursOfPrecipitation: 7.5,
        HoursOfRain: 3.5,
        HoursOfSnow: 6,
        Ice: "0",
        IconPhrase: "Rain and snow",
        LongPhrase: "Rain and snow showers, accumulating a coating to 1 cm",
        PrecipitationProbability: 85,
        Rain: "3 mm",
        ShortPhrase: "Rain and snow showers",
        Snow: "0.5 cm",
        SnowProbability: 55,
        ThunderstormProbability: 0,
        TotalLiquid: "4 mm",
        Wind: {
          Direction: "WNW",
          Speed: "14.8 km/h",
          WindGust: "31.5 km/h"
        }
      },
  
      Moon: {
        Rise: "10:48",
        Set: "19:37",
        Duration: "9.55"
      },
      Night: {
        Icon: 8,
        Clouds: "95%",
        HoursOfPrecipitation: 7,
        HoursOfRain: 0,
        HoursOfSnow: 7,
        Ice: "0",
        IconPhrase: "Snow",
        LongPhrase: "Snow at times, accumulating an additional 3-6 cm; roads could be slippery",
        PrecipitationProbability: 72,
        Rain: "0 mm",
        ShortPhrase: "Snow at times, 3-6 cm",
        Snow: "3.7 cm",
        SnowProbability: 72,
        ThunderstormProbability: 0,
        TotalLiquid: "4 mm",
        Wind: {
          Direction: "WNW",
          Speed: "14.8 km/h",
          WindGust: "31.5 km/h"
        }
      },
      Sun: {
        Rise: "07:45",
        Set: "15:45",
        Duration: "7.58"
      },
      TempMax: "3°",
      TempMin: "-1°"
    },
  
    {
      AirQuality:{
        Category: "Good",
        Type: "Particle Pollution"
      },
      RealFeelTemperature:{
        Max: "3°",
        Min: "-3°"
      },
      City: "Wrocław",
      Date: "2018-12-13",
      Day: {
        Icon: 7,
        Clouds: "92%",
        HoursOfPrecipitation: 7.5,
        HoursOfRain: 3.5,
        HoursOfSnow: 6,
        Ice: "0",
        IconPhrase: "Rain and snow",
        LongPhrase: "Rain and snow showers, accumulating a coating to 1 cm",
        PrecipitationProbability: 85,
        Rain: "3 mm",
        ShortPhrase: "Rain and snow showers",
        Snow: "0.5 cm",
        SnowProbability: 55,
        ThunderstormProbability: 0,
        TotalLiquid: "4 mm",
        Wind: {
          Direction: "WNW",
          Speed: "14.8 km/h",
          WindGust: "31.5 km/h"
        }
      },
  
      Moon: {
        Rise: "10:48",
        Set: "19:37",
        Duration: "9.55"
      },
      Night: {
        Icon: 8,
        Clouds: "95%",
        HoursOfPrecipitation: 7,
        HoursOfRain: 0,
        HoursOfSnow: 7,
        Ice: "0",
        IconPhrase: "Snow",
        LongPhrase: "Snow at times, accumulating an additional 3-6 cm; roads could be slippery",
        PrecipitationProbability: 72,
        Rain: "0 mm",
        ShortPhrase: "Snow at times, 3-6 cm",
        Snow: "3.7 cm",
        SnowProbability: 72,
        ThunderstormProbability: 0,
        TotalLiquid: "4 mm",
        Wind: {
          Direction: "WNW",
          Speed: "14.8 km/h",
          WindGust: "31.5 km/h"
        }
      },
      Sun: {
        Rise: "07:45",
        Set: "15:45",
        Duration: "7.58"
      },
      TempMax: "3°",
      TempMin: "-1°"
    },
  
    {
      AirQuality:{
        Category: "Good",
        Type: "Particle Pollution"
      },
      RealFeelTemperature:{
        Max: "3°",
        Min: "-3°"
      },
      City: "Wrocław",
      Date: "2018-12-14",
      Day: {
        Icon: 7,
        Clouds: "92%",
        HoursOfPrecipitation: 7.5,
        HoursOfRain: 3.5,
        HoursOfSnow: 6,
        Ice: "0",
        IconPhrase: "Rain and snow",
        LongPhrase: "Rain and snow showers, accumulating a coating to 1 cm",
        PrecipitationProbability: 85,
        Rain: "3 mm",
        ShortPhrase: "Rain and snow showers",
        Snow: "0.5 cm",
        SnowProbability: 55,
        ThunderstormProbability: 0,
        TotalLiquid: "4 mm",
        Wind: {
          Direction: "WNW",
          Speed: "14.8 km/h",
          WindGust: "31.5 km/h"
        }
      },
  
      Moon: {
        Rise: "10:48",
        Set: "19:37",
        Duration: "9.55"
      },
      Night: {
        Icon: 8,
        Clouds: "95%",
        HoursOfPrecipitation: 7,
        HoursOfRain: 0,
        HoursOfSnow: 7,
        Ice: "0",
        IconPhrase: "Snow",
        LongPhrase: "Snow at times, accumulating an additional 3-6 cm; roads could be slippery",
        PrecipitationProbability: 72,
        Rain: "0 mm",
        ShortPhrase: "Snow at times, 3-6 cm",
        Snow: "3.7 cm",
        SnowProbability: 72,
        ThunderstormProbability: 0,
        TotalLiquid: "4 mm",
        Wind: {
          Direction: "WNW",
          Speed: "14.8 km/h",
          WindGust: "31.5 km/h"
        }
      },
      Sun: {
        Rise: "07:45",
        Set: "15:45",
        Duration: "7.58"
      },
      TempMax: "3°",
      TempMin: "-1°"
    },
  
    {
      AirQuality:{
        Category: "Good",
        Type: "Particle Pollution"
      },
      RealFeelTemperature:{
        Max: "3°",
        Min: "-3°"
      },
      City: "Wrocław",
      Date: "2018-12-15",
      Day: {
        Icon: 6,
        Clouds: "92%",
        HoursOfPrecipitation: 7.5,
        HoursOfRain: 3.5,
        HoursOfSnow: 6,
        Ice: "0",
        IconPhrase: "Rain and snow",
        LongPhrase: "Rain and snow showers, accumulating a coating to 1 cm",
        PrecipitationProbability: 85,
        Rain: "3 mm",
        ShortPhrase: "Rain and snow showers",
        Snow: "0.5 cm",
        SnowProbability: 55,
        ThunderstormProbability: 0,
        TotalLiquid: "4 mm",
        Wind: {
          Direction: "WNW",
          Speed: "14.8 km/h",
          WindGust: "31.5 km/h"
        }
      },
  
      Moon: {
        Rise: "10:48",
        Set: "19:37",
        Duration: "9.55"
      },
      Night: {       
        Icon: 7,
        Clouds: "95%",
        HoursOfPrecipitation: 7,
        HoursOfRain: 0,
        HoursOfSnow: 7,
        Ice: "0",
        IconPhrase: "Snow",
        LongPhrase:
          "Snow at times, accumulating an additional 3-6 cm; roads could be slippery",
        PrecipitationProbability: 72,
        Rain: "0 mm",
        ShortPhrase: "Snow at times, 3-6 cm",
        Snow: "3.7 cm",
        SnowProbability: 72,
        ThunderstormProbability: 0,
        TotalLiquid: "4 mm",
        Wind: {
          Direction: "WNW",
          Speed: "14.8 km/h",
          WindGust: "31.5 km/h"
        }
      },
      Sun: {
        Rise: "07:45",
        Set: "15:45",
        Duration: "7.58"
      },
      TempMax: "3°",
      TempMin: "-1°"
    }
  ];
  

