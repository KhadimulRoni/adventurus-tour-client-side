import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Home/Login/Firebase/firebase.init";

initializeAuthentication();


const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const signInWithGoogle = () =>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        /* ---finally will always work--- */
        .finally(()=> setIsLoading(false));

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
            setIsLoading(false);
        });

        return () => unsubscribed;
    },[])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => { })
        .finally(()=> setIsLoading(false));

    }

    return{
        user,
        isLoading,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase ;