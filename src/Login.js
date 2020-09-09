import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //some fancy firebase login...
    }

    const register = e => {
        e.preventDefault();

        //some fancy firebase login...
    }

    return (
        <div className="login">
            <Link to="./">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="amazon-logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={login} type="submit" className="login__signInButton"> Sign In</button>
                    <p>
                        By signing-in you agree to Amazon's Conditions of Use & Sale.
                        Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
                </form>
            </div>

        </div>
    );
}

export default Login;
