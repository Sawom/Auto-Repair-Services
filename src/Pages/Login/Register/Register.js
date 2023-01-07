import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../Firebase/firebase';
import { useCreateUserWithEmailAndPassword,useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [confirmpassword, setConfirmpassword ] = useState('');
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true} );

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleEmail = (event)=> {
        setEmail(event.target.value);
    }
    const handlePassword = (event)=> {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = (event) =>{
        setConfirmpassword(event.target.value);
    }

    if(user){
        console.log('user', user);
    }
    // update name with async await
    const handleCreateUser  = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        if(password !== confirmpassword){
            setError("Password did not match!");
            return;
        }
        if(password.length < 6){
            setError("Password should be greater than 6 character.");
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated Profile');
        navigate('/home');
    }

    return (
        <div className='container' >
            <br /><br />
            <h2 className='app' >Register here</h2>
            <div className='formStyle ' >
                <br />
                <Form onSubmit={handleCreateUser} >
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control  type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group  className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  onBlur={handleEmail} required type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} required type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password?</Form.Label>
                        <Form.Control onBlur={handleConfirmPassword} required type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <p style={{color:'red'}} >{error}</p>
                    <Button variant="primary" type="submit">
                         Signup
                    </Button>
                    <br /><br />
                    <p>Already have an account? <Link to="/login" className='txt'  >Login here</Link> </p>
                </Form>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;