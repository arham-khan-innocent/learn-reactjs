import React, { useState } from "react";




function Hooks () 
{
    const state = useState();
    const [count, setCount] = useState(1);

    const IncrementNumber = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <div>{count}</div>
            <button onClick={IncrementNumber}>Click</button>
        </div>
    )
}

export default Hooks;