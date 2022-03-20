import React, {useEffect, useState} from 'react'
import WidgetGroup from './WidgetGroup'
import {randomWeatherList} from '../util'
import '../../public/index.css'
import Dashboard from './Dashboard'

export default function App() {
    const [cityList, setCityList] = useState([])
    const newCity = () => setCityList([...cityList, {cityName: '', cityList: []}])
    const deleteCity = (index) => setCityList(cityList.filter((_, cityIndex) => cityIndex !== index))

    const generateCity = (cityName, index) => {
        setCityList(cityList.map((_, cityIndex) => cityIndex === index ? {cityName: cityName, cityList: randomWeatherList()} : _))
    }

    const addCity = (index) => {
        setCityList(cityList.map((_, cityIndex) => cityIndex === index ? {...cityList[cityIndex], cityList: randomWeatherList()} : _))
    }

    return (
        <div className="widget">
            <Dashboard onClick={newCity} />
            {cityList.map((cityObj, cityIndex) =>
                <WidgetGroup key={Math.random().toString()} generateCity={generateCity}
                    addCity={addCity} deleteCity={deleteCity} city={cityObj.name} cityList={cityObj.cityList} />)}
        </div>)
}