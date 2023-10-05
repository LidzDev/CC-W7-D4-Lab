import React, {useState, useEffect} from "react";
import CountriesSelect from "../components/CountriesSelect";
import TotalPopulation from "../components/TotalPopulation";
import FavCountries from "../components/FavCountries";

const CountriesContainer = () => {
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then((countryData) => {setCountries(countryData)})
        .catch((error) => console.log(`error loading data; ${error}`))
    }

    useEffect(() => {
        getCountries()
    }, [])

    return (
        <>
        <h2>this is the country container</h2>
        <TotalPopulation/>
        {countries ? <CountriesSelect countries={countries}/> : null}
        <FavCountries/>
        </>
    )
}

export default CountriesContainer
