import React from 'react'
import PropTypes from 'prop-types'

const SingleWidget = ({index, cityList, city, addCity, deleteCity}) => {
    const removeWidget = () => deleteCity(index)
    const newCity = () => addCity(index)
    const tempIndex = 0
    const precipIndex = 1
    const windIndex = 2

    return (
        <div className="widget">
            <button onClick={removeWidget}>x Remove</button>
            <div className="widget__header">
                <h1>{city}</h1>
                <button onClick={newCity}>Generate</button>
            </div>
            <input type="checkbox" />
            <h6>Display °F</h6>
            <div className="widget__content">
                <div className="widget__row temperature">
                    <h2><strong>Temperature: </strong>{cityList[tempIndex]}</h2>
                </div>
                <div className="widget__row precipitation">
                    <h2><strong>Precipitation: </strong>{cityList[precipIndex]}</h2>
                </div>
                <div className="widget__row wind">
                    <h2><strong>Wind: </strong>{cityList[windIndex]} km/h</h2>
                </div>
            </div>
        </div>
    )
}

SingleWidget.propTypes = {
    index: PropTypes.func.isRequired,
    city: PropTypes.func.isRequired,
    cityList: PropTypes.func.isRequired,
    addCity: PropTypes.func.isRequired,
    deleteCity: PropTypes.func.isRequired
}

export default SingleWidget