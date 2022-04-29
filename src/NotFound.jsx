import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import { NavLink, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

function NotFound() {
    const location =  useLocation();
    return (
        <React.Fragment>
            <Navbar/>

            <div className=''>
                <h2>404 NotFound</h2>
                <p>Page not fount with this url {location.pathname}</p>
            </div>


        </React.Fragment>


    )
}

export default NotFound;