import { useState } from "react";


function GetCurrentTimeUsingHooks () 
{
    let newTime = new Date().toLocaleTimeString();

    const [time, setTime] = useState(newTime);

    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }
    
    return (
        <div>
            <h1>{time}</h1>
            <button onClick={UpdateTime}>Get Time</button>
        </div>
    )
}

export default GetCurrentTimeUsingHooks;