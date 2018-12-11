import React, { Component } from 'react'
import ListElement from '../ListElement/ListElement';
import { currentDays } from '../../Helpers/helpers';

export default class WeatherList extends Component{
    constructor(props){
        super(props)
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

    renderList =()=>{
        const tmpObj = currentDays(obj)
        console.log(tmpObj);
        if(tmpObj)
        return tmpObj.map( (day, index) =>{
            
            return (<ListElement cardNum={index}
             key={index} day={day}

             />)
        })
    }

    render(){
        return(
         <div className='weather-forecast-list'>
         <div className='card-wrapper'>
         {this.renderList()}
         </div>
         </div>
        )
    }
}



const obj = [
   {
    City: "Wrocław",
   Date: "2018-12-11",
   Day:{
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
    Wind:{
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h"
       },
   },
   
   Moon:{
    Rise: "10:48",
    Set: "19:37",
   },
   Night:{
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
    Wind:{
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h"
    }
   },
   Sun:{
    Rise: "07:45",
    Set: "15:45",
   },
   TempMax: "3°C",
TempMin: "-1°C",
   },



   {
    City: "Wrocław",
   Date: "2018-12-12",
   Day:{
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
    Wind:{
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h"
       },
   },
   
   Moon:{
    Rise: "10:48",
    Set: "19:37",
   },
   Night:{
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
    Wind:{
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h"
    }
   },
   Sun:{
    Rise: "07:45",
    Set: "15:45",
   },
   TempMax: "3°C",
TempMin: "-1°C",
   },



   {
    City: "Wrocław",
   Date: "2018-12-13",
   Day:{
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
    Wind:{
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h"
       },
   },
   
   Moon:{
    Rise: "10:48",
    Set: "19:37",
   },
   Night:{
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
    Wind:{
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h"
    }
   },
   Sun:{
    Rise: "07:45",
    Set: "15:45",
   },
   TempMax: "3°C",
TempMin: "-1°C",
   },



   {
    City: "Wrocław",
   Date: "2018-12-14",
   Day:{
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
    Wind:{
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h"
       },
   },
   
   Moon:{
    Rise: "10:48",
    Set: "19:37",
   },
   Night:{
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
    Wind:{
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h"
    }
   },
   Sun:{
    Rise: "07:45",
    Set: "15:45",
   },
   TempMax: "3°C",
TempMin: "-1°C",
   },


   {
    City: "Wrocław",
   Date: "2018-12-15",
   Day:{
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
    Wind:{
        Direction: "WNW",
        Speed: "14.8 km/h",
        WindGust: "31.5 km/h",
       },
   },
   
   Moon:{
    Rise: "10:48",
    Set: "19:37",
   },
   Night:{
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
    Wind:{
        Direction: "WNW",
Speed: "14.8 km/h",
WindGust: "31.5 km/h",
    }
   },
   Sun:{
    Rise: "07:45",
    Set: "15:45",
   },
   TempMax: "3°C",
TempMin: "-1°C",
   },
   
   

]