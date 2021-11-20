import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function Auth() {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            localStorage.setItem('googleAuth', JSON.stringify({'token': credential.accessToken, user: result.user}));
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

export function isAuthenticated() {
    return localStorage.getItem('googleAuth') !== null;
}