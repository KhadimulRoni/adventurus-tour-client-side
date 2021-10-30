import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Home/Login/Firebase/firebase.init";

initializeAuthentication();


const useFirebase = () =>{
    const [user,setUser] = useState({});
    const auth = getAuth();

    const signInWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        });

    }
    /* --observer--- */
    useEffect ( () => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else(
                setUser({})
            )
        });
        return () => unsubscribed;
    },[])

    const logOut = () => {
        signOut(auth)
        .then(() => { });
    }

    return{
        user,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase ;