import React from 'react';
import './WeatherWidget.css';
import { getOttawaWeatherNow } from '../managers/weathermanager';

export default class WeatherWidget extends React.Component{


    constructor(props){
        super();

        this.state = {
            weather_loaded: false,
            weather_data: {}
        }
    }

    componentDidMount(){
        getOttawaWeatherNow().then(res => this.setState(
            {
                weather_loaded: true,
                weather_data: res
            }
        ));
    }

    render(){
        const { weather_loaded, weather_data } = this.state;
        let feels_like = '...';
        let weather = 'weather unknown'
        let weather_icon_URL = ''

        if (weather_loaded){
            feels_like = weather_data.main.feels_like + String.fromCodePoint(8451);
            weather = weather_data.weather[0].description;
            weather_icon_URL = `http://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png`
        }
        
        return (
            <div className='WeatherWidget'>
            <img src={weather_icon_URL} alt={weather}></img>
            <h3>Feels like: {feels_like}</h3>
            </div>
            );
    }
}