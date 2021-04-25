import React, { useState } from 'react'
import CountrySelect from 'react-bootstrap-country-select'; 

function Country() {

    const [ value, setValue ] = useState(null); 

    return (
        <div>
            <CountrySelect 
                placeholder="Your country"
                value={value} 
                onChange={setValue}/>
        </div>
    )
}

export default Country
