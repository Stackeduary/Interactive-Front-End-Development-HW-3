import React, {useEffect, useState} from 'react'
import Header from './Header'
import {getRandomArbitrary, weatherIcons} from '../util'

import '../../public/index.css'
import Weather from './Weather'

export default function App() {
    const [temperature, setTemperature] = useState(null)
    const [precipitation, setPrecipitation] = useState(null)
    const [wind, setWind] = useState(null)
    const [city, setCity] = useState('')
    const [isShowWeather, setIsShowWeather] = useState(false)

    const generateWeather = () => {
        setTemperature(getRandomArbitrary(-20, 30))
        setPrecipitation(weatherIcons[getRandomArbitrary(0, weatherIcons.length - 1)])
        setWind(getRandomArbitrary(0, 10))
    }

    useEffect(() => {
        generateWeather()
    }, [])

    const onCityChange = (e) => {
        setCity(e.target.value)
    }

    const showWeather = (e) => {
        e.preventDefault()

        if (city.length === 0 || city.length >= 20) {
            return null
        }

        setIsShowWeather(true)
    }

    if (!isShowWeather) {
        return (
            <section className="widget">
                <form className="widget__form" onSubmit={showWeather}>
                    <div className="input__container">
                        <input autoFocus type="text" onChange={onCityChange}/>
                        {
                            city.length >= 20 && <span className="input__message error">City name is too long</span>
                        }
                    </div>
                    <button
                        disabled={city.length === 0 || city.length >= 20}
                        type="submit"
                        className="widget__button green">
                        Show Weather
                    </button>
                </form>
            </section>
        )
    }

    return <section className="widget">
        <Header city={city} generateWeather={generateWeather}/>
        <Weather precipitation={precipitation} temperature={temperature} wind={wind}/>
    </section>
}