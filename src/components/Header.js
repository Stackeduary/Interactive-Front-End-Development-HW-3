import React from 'react'
import PropTypes from 'prop-types'

export default function Header({generateWeather, city}) {
    return <div className="widget__header">
        <h2>{city}</h2>
        <button onClick={generateWeather} className="widget__button">Generate</button>
    </div>
}

Header.propTypes = {
    generateWeather: PropTypes.func,
    city: PropTypes.string,
}