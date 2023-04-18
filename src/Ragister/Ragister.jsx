import React, { useState } from 'react';
import SocialLogin from '../Social/SocialLogin';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';
import { Link } from 'react-router-dom';


const Ragister = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [show, setShow] = useState(false)

    const auth = getAuth(app)


    const handleRagister = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        // console.log(name, email, password)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {  
                const user = userCredential.user;
                console.log(user)
                setSuccess('You have successfully created an account')
                setError('')
                form.reset()
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                setSuccess('')
            });

    }

    const seeBtn= () => {
        setShow(!show)
    }

    return (
        < div >
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 ">
                        <div className="border w-100 m-auto text-center p-5">
                            <p className="text-danger">{error}</p>
                            <p className='text-primary'>{success}</p>
                            <form onSubmit={handleRagister} >
                                <input
                                    className="email p-3 m-2"
                                    type="text"
                                    placeholder="enter your Name"
                                    name='name'
                                    required
                                />
                                <input

                                    className="email p-3 m-2"
                                    type="email"
                                    name='email'
                                    placeholder="enter your email"
                                    required
                                />
                                <div className="pass-container">
                                    <input
                                        className="password p-3 m-2"
                                        type={show? 'text':'password'}
                                        name='password'
                                        placeholder="enter your password"
                                    />
                                </div>
                                <p className='text-primary' onClick={seeBtn}>see password</p>
                                <input
                                    className="btn btn-info w-75 p-2 mt-3" type="submit" value="Register" />
                                <p className="p-2">
                                    <small className="text-info">
                                        already have account? <Link to='/login'>Login</Link>
                                    </small>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img
                            className="w-100"
                            src="https://i.ibb.co/Vmyggr3/undraw-Login-re-4vu2.png"
                            alt=""
                        />
                    </div>
                </div>

                <SocialLogin></SocialLogin>

            </div>
        </div >
    );
};

export default Ragister;