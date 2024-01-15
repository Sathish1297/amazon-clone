import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { useStateValue } from '../providers/StateProvider';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    
    const history = useHistory();
    const [{basket, user}, dispatch] = useStateValue();

    const signIn = (e) => {
        e.preventDefault();
        
        const auth = getAuth();

        const email = e.target[0].value; 
        const password = e.target[1].value; 

        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User signed Up: " + user)

            dispatch({
              type: "SET_USER",
              user: user,
            });

            history.push('/');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    }


  return (
    <div className='login'>
        <Link to='/'>
            <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"></img>
        </Link>
        <div className='login__container'>
            <h1>Sign In</h1>

            <form onSubmit={signIn}>
                <h5>Email</h5>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>

                <h5>Password</h5>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>

                <button className='login__signInButton'>Sign In</button>
            </form>

            <p>
                By sign in you agree to view amazon clone terms and condition of use and privacy notice.
                {/* Please see our policies, our cookies notice and our internet based Ads notice. */}
            </p>

            <p className='newAmazon'>New to Amazon?</p>
            <button className='login__registerButton' > <Link to='/register'>Create your Amazon account</Link> </button>
        </div>
    </div>
  )
}

export default Login