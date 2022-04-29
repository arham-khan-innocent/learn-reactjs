import { useState } from "react";

function SingleOnChnageForm ()
{
    const [login, setLogin] = useState({
        email : "",
        password : "",
    });

    const InpChnage = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        const {value, name} = event.target;
        

        setLogin( (preValue) => {
            console.log(preValue);
            return {
                ...preValue,
                [name] : value,
            }
        })
    }

    const Submit = (event) => {
        event.preventDefault();

    }

    
    
    
   
    
    return (
        <form onSubmit={Submit}>
            <div>
                <h1 style={{marginBottom:'20px'}}>Login Form </h1>
                <p>
                    {login.email}
                    <br/>
                    {login.password}
                </p>
                <input onChange={InpChnage} type="email" name="email" placeholder="Email..."  />
                <input onChange={InpChnage} type="text" name="password" placeholder="Password..." />
                <button style={{width:'300px', margin:'5px'}}>Login</button>
            </div>
        </form>
    )
}

export default SingleOnChnageForm;