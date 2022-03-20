import React from 'react'
import CityForm from './CityForm'
import SingleWidget from './SingleWidget'
import PropTypes from 'prop-types'

const WidgetGroup = ({index, cityList, city, addCity, deleteCity, generateCity}) => {
    return (
        <div className="widget">
            {city === '' ?
                <CityForm onClick={generateCity} index={index} /> :
                <SingleWidget cityList={cityList} city={city} addCity={addCity} deleteCity={deleteCity}/>}
        </div>
    )
}

WidgetGroup.propTypes = {
    index: PropTypes.func.isRequired,
    city: PropTypes.func.isRequired,
    cityList: PropTypes.func.isRequired,
    addCity: PropTypes.func.isRequired,
    deleteCity: PropTypes.func.isRequired,
    generateCity: PropTypes.func.isRequired
}

export default WidgetGroup