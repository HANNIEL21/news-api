import React from 'react';
import { MdSearch } from "react-icons/md"

const SearchBox = () => {
    return (
        <div className='searchbox d-flex container px-3 py-1'>
            <input type="text" className='w-100' />
            <button className='col-1 d-flex align-items-center justify-content-center'><MdSearch className='m-0 h3 fw-bold' /></button>
        </div>
    )
}

export default SearchBox