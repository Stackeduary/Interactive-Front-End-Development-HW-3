import {useState} from 'react'
import PropTypes from 'prop-types'

const CityForm = ({cityProp}) => {
    const [value, setValue] = useState('')

    const changeCity = (event) => {
        setValue(event.target.value)
    }

    const clickEvent = () => {
        cityProp(value)
    }

    return (
        <div className='widget'>
            <input type='text' value={value} onChange={changeCity}/>
            <button className='btn-city' disabled={value == '' || value.length > 19} onClick={clickEvent}>Show Weather</button>
            {value.length > 19 && <strong>City name is too long!</strong>}
        </div>
    )
}
CityForm.propTypes = {
    cityProp: PropTypes.func.isRequired
}

export default CityForm