import React from 'react'
import PropTypes from 'prop-types'

export default function Weather({temperature, precipitation, wind}) {
    return (
        <div className="widget__content">
            <div className="widget__row temperature">
                <strong>Temperature:</strong>
                <span>{temperature} °C</span>
            </div>
            <div className="widget__row precipitation">
                <strong>Precipitation:</strong>
                <span>{precipitation}</span>
            </div>
            <div className="widget__row wind">
                <strong>Wind:</strong>
                <span>{wind} km/h</span>
            </div>
        </div>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number,
    precipitation: PropTypes.string,
    wind: PropTypes.number,
}