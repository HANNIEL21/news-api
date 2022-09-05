import React from 'react';
import {MdOutlineNotificationsActive} from "react-icons/md";
import {BiBookmarks } from "react-icons/bi"
import SearchBox from './SearchBox';

const Header1 = () => {
    return (
        <header className='d-flex align-items-center justify-content-center p-4 border-bottom border-3'>
            <div className="container-fluid">
                <div className="row align-items-center justify-content-between">
                    <div className="col-6">
                       <SearchBox />
                    </div>
                    <div className="col-2">
                        <div className="d-flex">
                            <a href="" className='m-0 h4 me-4'><MdOutlineNotificationsActive /></a>
                            <a href="" className='m-0 h4'><BiBookmarks /></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header1