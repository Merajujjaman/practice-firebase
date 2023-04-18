import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setError('')
                setSuccess('log in successfull')
                form.reset()

                console.log(user)
                
            })
            .catch((error) => {
                const errorMessage = error.message;
                setSuccess('')
                setError(errorMessage)
            });
    }

    return (
        <>
            <div>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6 ">
                            <div className="border w-100 m-auto text-center p-5">
                                <p className='text-danger'>{error}</p>
                                <p className='text-primary'>{success}</p>
                                <form onSubmit={handleLogin}>
                                    <input
                                        className="email p-3 m-2"
                                        type="email"
                                        name='email'
                                        placeholder="enter your email"
                                        required
                                    />
                                    <input
                                        className="password p-3 m-2"
                                        type="password"
                                        name='password'
                                        placeholder="enter your password"
                                    />
                                    <button className="btn btn-info w-75 p-2 mt-3">Login</button>
                                    <p className="p-2">
                                        <small className="text-info">
                                            are you new? <Link to='/ragister'>Ragister</Link>
                                        </small>
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img
                                className="w-100"
                                src="https://i.ibb.co/hYJTmVX/undraw-Mobile-login-re-9ntv-1.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;