import React, { useState } from 'react';
import { getAuth,GithubAuthProvider , GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../Firebase/firebase';
const UseFirebase = () => {
    const [user,setUser] = useState({})
    // google
    const handleGoogleSignIn = () => {
        const auth = getAuth();
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            setUser(user);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    // github
    const handleGithubSignIn = ()=>{
        const auth = getAuth();
        const gitProvider = new GithubAuthProvider();
            signInWithPopup(auth, gitProvider)
            .then((result) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GithubAuthProvider.credentialFromError(error);
            });
    }

    return {user,setUser, handleGoogleSignIn,handleGithubSignIn}
};

export default UseFirebase;