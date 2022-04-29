import { useEffect, useState } from "react";

function UseEffect() {
    const [num, setNum] = useState(0);
    useEffect( () => {
        document.title = `You Click Me ${num} Time`
    })

    return (
        <div>
            <button onClick={() => {
                setNum(num+1)}
            }>Click Me {num} Time</button>
        </div>
    );
}

export default UseEffect;