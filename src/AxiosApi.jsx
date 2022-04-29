import React, { useEffect, useState } from "react"
import axios from "axios"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function AxiosApi()
{
    const [num, setNum] = useState('');
    const [name, setName] = useState('');
    const [moves, setMoves] = useState('');

    useEffect( () => {
        async function getData()
        {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();
    })

    return (
        <div className="col-md-4">
            <h2>Name: {name}</h2>
            <h2>Moves: {moves}</h2>
            <select value={num} onChange={(event)  =>{
                setNum(event.target.value);
            }} className="form-control">
                <option selected disabled value=''>Choose</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
        </div>
    )
}

export default AxiosApi;