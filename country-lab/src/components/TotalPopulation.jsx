import React from "react";


const TotalPopulation = ({countries}) => {
    let populationNumber = 0
    let runningTotal = countries.map((country) => {
        let countryPopulation = Number(country.population)
        populationNumber += countryPopulation
        return populationNumber
    })    
    
    console.log(populationNumber)
    return (
        <>
        <h3>The world population is {populationNumber}</h3>
        </>
    )
}

export default TotalPopulation