import React from 'react'

import './searchbox.style.css'

const SearchBox = ({ placeholder, handleOnChange }) => (


    <input type='search'
        className='search'
        placeholder={placeholder}
        onChange={handleOnChange} />
);


export default SearchBox;