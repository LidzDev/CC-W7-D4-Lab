import React, {useState, useEffect} from "react";
import CountriesSelect from "../components/CountriesSelect";
import TotalPopulation from "../components/TotalPopulation";
import FavCountries from "../components/FavCountries";
import CountryDetail from "../components/CountryDetail";

    const CountriesContainer = () => {
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [favCountryList, setFavCountryList] = useState([])

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then((countryData) => {setCountries(countryData)})
        .catch((error) => console.log(`error loading data; ${error}`))
    }

    const onCountrySelected = (index) => {
        setSelectedCountry(countries[index])
    }

    const saveNewFav = (evt) => {
        //where we left off
    }
    
    // const saveNewFav = (evt) => {
    //     evt.preventDefault();
    //     let selectedCountryIndex = evt.target.name
    //     const favCountryListCopy = [... favCountryList]
    //     favCountryListCopy.push({name: newFav})
    //     setFav

    // }

    useEffect(() => {
        getCountries()
    }, [])

    return (
        <>
            <h2>this is the country container</h2>
            {countries ? <TotalPopulation countries={countries}/> : null}
        
            {countries ? <CountriesSelect countries={countries} 
            onCountrySelected={onCountrySelected}/> : null}

            {selectedCountry ? <CountryDetail country={selectedCountry}/>: null}

            <FavCountries/>
        </>
    )
}

export default CountriesContainer
