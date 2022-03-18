import {useState} from 'react'
import Randomize from './Randomize'
import CityForm from './CityForm'

const App = () => {
    const [city, setCity] = useState('')

    const updateCity = (city) => {
        setCity(city)
    }

    if (city == '') {
        return <CityForm cityProp={updateCity} />
    }

    return (
        <div className='app'>
            <Randomize city={city} />
        </div>
    )
}

export default App