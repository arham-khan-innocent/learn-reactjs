import { useState } from "react";


function DigitalClockInHooks () 
{
    let curentTime = new Date().toLocaleTimeString();

    const [time, setTime] = useState(curentTime);

    const UpdateTime = () => {
        curentTime = new Date().toLocaleTimeString();
        setTime(curentTime);
    }
    setInterval(UpdateTime, 1000)
    
    return (
        <div>
            <h1>{time}</h1>
        </div>
    )
}

export default DigitalClockInHooks;