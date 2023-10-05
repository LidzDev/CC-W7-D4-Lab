const CountryDetail = ({country}) => {
    
    let currencyCode = Object.keys(country.currencies)
    console.log(currencyCode)
    
    let currencyName = country.currencies[currencyCode].name
    console.log(currencyName)
    
    return (
        <>
        <h2>{country.name.official}</h2>
        <ol>
            <li>
                Capital: {country.capital}
            </li>
            <li>
                Currency: {currencyName}
            </li>
        </ol>
        
        </>
    )
}

export default CountryDetail