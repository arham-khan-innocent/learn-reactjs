import React, { useState } from 'react';
import Navbar from './Navbar';

function Search() {
    const [img, setImg] = useState();
    const SearchEvent = (event) => {
        const imgSrc = event.target.value;
        setImg(imgSrc);
    }
    const image = `https://source.unsplash.com/600x400?${img}`
    return (
        <div>
            <Navbar/>
            <div className='col-md-4 offset-4 mt-4'>
                <input onChange={SearchEvent} className='form-control' type="text" placeholder='Search'/>

                <img className='img-thumbnail w-100 mt-3' src={image} alt={img} />
            </div>
        </div>
    )
}

export default Search;