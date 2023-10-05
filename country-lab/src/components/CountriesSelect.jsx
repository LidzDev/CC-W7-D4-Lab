import React from "react";
import CountryItem from "./CountryItem";

const CountriesSelect = ({countries, onCountrySelected}) => {

    const CountryDropdown = countries.map((country, index) => {
        return <CountryItem country={country} index={index} key={index}/>
    })

    const handleSelectChange = (evt) => {
        onCountrySelected(evt.target.value)
    }

    return (
        <>
        <select id="countryList" name="countryList" onChange={handleSelectChange}>
        {CountryDropdown}
        </select>
        </>
    )
}

export default CountriesSelect