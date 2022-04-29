import { useState } from "react";

function LoginForm ()
{
    const [inpEmail, setInpEmail] = useState('');
    const [inpPassword, setInpPassword] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Submit = (event) => {
        event.preventDefault();
        
        setInpEmail(email);
        setInpPassword(password);

    }

    const Email = (event) => {
        setEmail(event.target.value);
    }
    
    
    const Password = (event) => {
        setPassword(event.target.value);
    }
    
    return (
        <form onSubmit={Submit}>
            <div>
                <h1>Email : {inpEmail} </h1>
                <h1>Password : {inpPassword} </h1>
                <h1 style={{marginBottom:'20px'}}>Login Form </h1>
                <input onChange={Email} type="email" placeholder="Email..." />
                <input onChange={Password} type="text" placeholder="Password..." />
                <button style={{width:'300px', margin:'5px'}}>Login</button>
            </div>
        </form>
    )
}

export default LoginForm;