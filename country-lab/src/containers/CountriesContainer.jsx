import React, {useState} from "react";
import CountriesSelect from "../components/CountriesSelect";
import TotalPopulation from "../components/TotalPopulation";
import FavCountries from "../components/FavCountries";

const CountriesContainer = () => {
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    return (
        <>
        <h2>this is the country container</h2>
        <TotalPopulation/>
        <CountriesSelect/>
        <FavCountries/>
        </>
    )
}

export default CountriesContainer
