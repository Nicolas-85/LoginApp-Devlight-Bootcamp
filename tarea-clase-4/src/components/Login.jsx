import LoginForm from "./LoginForm";
import LoginSuccesful from "./LoginSuccessful";
import "./Login.css"
import { useState } from 'react';

const Login = ()=> {

    const[isLogged, setIsLogged] = useState(window.localStorage.getItem('isLogged'))

    const onSuccess = () => {
        setIsLogged('true')
    }
    return(
        <main className="containerLogin">
            <section>
                <h1 className="loginTitle">Stax Food Admin Login</h1>
            </section>
            <section>
                {isLogged === 'true'? (<LoginSuccesful/>) : (<LoginForm onSuccess={onSuccess}/>)}
            </section>
        </main>
    )
}

export default Login;