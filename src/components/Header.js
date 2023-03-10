import React from 'react';
import './Header.css';
import Sidebar from './Sidebar';
import WeatherWidget from './WeatherWidget';

export default function Header(props){
    return (
        <div className='Header'>
        <Sidebar/>
        <h1>Dashboard</h1>
        <WeatherWidget/>
        </div>
    );
}