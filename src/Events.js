import { useState } from "react";

function Events () {
    const purple = '#8e44ad'
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState('Click Me');

    const chnageBg = () => {
        let color = "#34495e"        ;
        setBg(color);
        setName('Single Click 👍');
    }

    const BackToNormal = () => {
        setBg(purple)
        setName('Click Me');
    }

    return (
        <div style={{backgroundColor:bg}}>
            <button onMouseEnter={chnageBg} onMouseLeave={BackToNormal}>{name}</button>
        </div>
    )
}

export default Events;