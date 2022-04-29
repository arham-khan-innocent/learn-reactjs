import { useState } from "react";

function Form ()
{
    const [fullName, setfullName] = useState();
    const [name, setName] = useState();

    const InputEvent = (event) => {
        setName(event.target.value);
    }

    const Submit = () => {
        setfullName(name);
    }
    return (
        <div>
            <h1>Hi, {fullName}</h1>
            <input type="text" placeholder="Enter Your Name..." onChange={InputEvent} />
            <button onClick={Submit}>Submit</button>
        </div>
    )
}

export default Form;