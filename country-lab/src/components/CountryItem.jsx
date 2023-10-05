import React from "react";

const CountryItem = ({country, index}) => {

    return (
        <>
        <option id={index} value={index} name="country-id">
            {country.name.common}
        </option>
        </>
    )
}

export default CountryItem