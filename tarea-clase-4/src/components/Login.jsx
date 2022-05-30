import LoginForm from "./LoginForm";
import LoginSuccesful from "./LoginSuccessful";
import "./Login.css"
import { useState } from 'react';

const Login = ()=> {

    const[isLogged, setIslogged] = useState(window.localStorage.setItem('isLogged'))
    return(
        <main className="containerLogin">
            <section>
                <h1 className="loginTitle">Stax Food Admin Login</h1>
            </section>
            <section>
            {isLogged === true? <LoginSuccesful/> : <LoginSuccesful/>    }
                
            </section>
        </main>
    
    )
}

export default Login;