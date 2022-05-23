

const LoginForm = () => {

    return(
        <main className="totalContainer">
            <div className="titleContainer">
                <h1>Stax Food Admin Login</h1>
            </div>
            <section className="loginContainer">
                <h3>Please fill in your unique admin login details below</h3>
                <input type="text" placeholder="User Name" />
                <input type="text" placeholder="Password" />
                <img src="" alt="" />
                <button>forgot password?</button>
                <button>Sign In</button>

            </section>
        </main>
    )
}

export default LoginForm;