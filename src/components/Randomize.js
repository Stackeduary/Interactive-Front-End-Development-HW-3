import {useState} from 'react'
import PropTypes from 'prop-types'

const Randomize = (props) => {
    const randomNum = Math.random()
    const randomTemp = Math.floor(randomNum * 51) - 20
    const randomEmojiIndex = Math.floor(randomNum * 7)
    const randomWind = Math.floor(randomNum * 11)
    const precipArray = ['☀️', '⛅️', '☁️', '🌩️', '🌧️', '🌦️', '🌨️']

    const [weather, setWeather] = useState({
        temp: 0,
        precip: 0,
        wind: 0
    })

    const weatherClick = () => {
        setWeather({
            temp: randomTemp,
            precip: precipArray[randomEmojiIndex],
            wind: randomWind
        })
    }

    return (
        <section className="widget">
            <div className="widget__header">
                <h2>{props.city}</h2>
                <button className='widget__button' onClick={weatherClick}>Generate</button>
            </div>
            <div className="widget__content">
                <div className="widget__row temperature">
                    <strong>Temperature: {weather.temp} °C</strong>
                </div>
                <div className="widget__row precipitation">
                    <strong>Precipitation: {weather.precip}</strong>
                </div>
                <div className="widget__row wind">
                    <strong>Wind: {weather.wind} km/h</strong>
                </div>
            </div>
        </section>
    )
}

Randomize.propTypes = {
    city: PropTypes.string.isRequired
}

export default Randomize