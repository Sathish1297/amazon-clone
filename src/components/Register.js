import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useStateValue } from '../providers/StateProvider';

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    
    const history = useHistory();

    const [{basket, user}, dispatch] = useStateValue();

    const register = (e) => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up 
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
    <div className='register'>
        <Link to='/'>
            <img className='register__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"></img>
        </Link>
        <div className='register__container'>
            <h1>Sign Up</h1>

            <form >
                <h5>Name</h5>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>

                <h5>Email</h5>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                
                <h5>Password</h5>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>

            </form>

            <button className='register__registerButton' onClick={register}>Create your Amazon account</button>

            <p>
                By signing Up you agree to view amazon clone terms and condition of use and privacy notice.
            </p>

            <p> Already have an account? <Link to='/login'>Sign in</Link> </p>
        </div>
    </div>
  )
}

export default Register