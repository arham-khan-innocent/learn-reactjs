import { useState } from "react";

function Register ()
{
    const [login, setLogin] = useState({
        name : "",
        email : "",
        phone : "",
        password : "",
        address : "",
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
                <h1 style={{marginBottom:'20px'}}>Register Form </h1>
                <p>
                    {login.name}
                    <br/>
                    {login.email}
                    <br/>
                    {login.phone}
                    <br/>
                    {login.password}
                    <br/>
                    {login.address}
                </p>
                <input onChange={InpChnage} type="text" name="name" placeholder="Name..."  />
                <input onChange={InpChnage} type="email" name="email" placeholder="Email..."  />
                <input onChange={InpChnage} type="text" name="phone" placeholder="Phone..." />
                <input onChange={InpChnage} type="text" name="password" placeholder="Password..." />
                <input onChange={InpChnage} type="text" name="address" placeholder="Address..." />
                <button style={{width:'300px', margin:'5px'}}>Login</button>
            </div>
        </form>
    )
}

export default Register;