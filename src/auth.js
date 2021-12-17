import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function Auth() {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            localStorage.setItem('googleAuth', JSON.stringify({'token': credential.accessToken, user: result.user}));
            window.location.reload(false);
        }).catch((error) => {
            console.log(error);
        });
}

export function isAuthenticated() {
    return localStorage.getItem('googleAuth') !== null;
}

export function getUserData() {
    if (localStorage.getItem("googleAuth") === null) {
        return undefined;
    }
    return JSON.parse(localStorage.getItem('googleAuth')).user;
}

export const signOut = () => {
    getAuth().signOut().then(()=> {
        localStorage.removeItem('googleAuth');
        window.location.reload(false);
    }).catch((error) => {
      console.log(error.message)
    })
  }