import React from 'react'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import LinkButton from './LinkButton';
import LoginIcon from '@mui/icons-material/Login';



function Login() {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const authenticate = () => {
        return signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                console.log(error);
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div>
            <p>Please, login first</p>
            <LinkButton title='Login' onClick={authenticate} Icon={LoginIcon} />
        </div>
    )
}

export default Login
