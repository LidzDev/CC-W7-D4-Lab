import React from "react";

const CountryItem = ({country, index}) => {

    return (
        <>
        <option id={index} value={index}>
            {country.name.common}
        </option>
        </>
    )
}

export default CountryItem