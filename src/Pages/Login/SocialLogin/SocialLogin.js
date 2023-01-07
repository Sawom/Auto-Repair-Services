import React from 'react';
import { Button } from 'react-bootstrap';
import UseFirebase from '../../../Hooks/UseFirebase';
import auth from '../../../Firebase/firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Google from '../../../images/google.png';
import Git from '../../../images/git.png';


const SocialLogin = () => {
    const {handleGoogleSignIn,handleGithubSignIn} =  UseFirebase();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    if(user){
        navigate('/home');
    }
    // google sign in
    const handleGoogle = ()=>{
        handleGoogleSignIn();
    }
    // github sign in
    const handleGithub = () =>{
        handleGithubSignIn() 
    }
    return (
        <div>
            {/* or style */}
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {/* buttons */}
            <div>
                <Button onClick={handleGoogle} variant="primary" size="lg">
                    <img style={{ width: '30px' }} src={Google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </Button> <br /> <br />
                <Button onClick={handleGithub} variant="primary" size="lg">
                    <img style={{ width: '30px' }} src={Git} alt="" />
                    <span className='px-2'>Git Hub Sign In</span>
                </Button>
            </div>
            
        </div>
    );
};

export default SocialLogin;