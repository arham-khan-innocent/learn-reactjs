import React from 'react';
import {useLocation, useParams} from 'react-router-dom';
import Navbar from './Navbar';

function User() {
    const { id, name } = useParams();
    const location = useLocation();
    
    
    return (
        <React.Fragment>
            <Navbar/>
            <h2> ID = {id} <br/>Name  {name}</h2>
            <p>URL = {location.pathname}</p>
        </React.Fragment>


    )
}

export default User;