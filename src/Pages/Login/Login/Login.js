import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../Firebase/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
    const [email,setEmail] = useState('') ;
    const [password, setPassword] = useState('') ;
    const [ signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleEmail = (event)=> {
        setEmail(event.target.value);
    }
    const handlePassword = (event)=> {
        setPassword(event.target.value);
    }
    const handleLogin = (event)=>{
         event.preventDefault();
         signInWithEmailAndPassword(email, password);
    }
    // reset password
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

    return (
        <div className='container' >
            <br /><br />
            <h2 className='app' >Login here</h2>
            <div className='formStyle ' >
                <br />
                <Form onSubmit={handleLogin} >
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} required type="email" placeholder="Enter Email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} required type="password" placeholder="Enter Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br /><br />
                    <p>New to our website? <Link to="/register" className='txt'  >Register here</Link> </p> <br />
                    <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'
             onClick={resetPassword}>Reset Password</button> </p>
                </Form>
            </div>
            
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;