// import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";


// import { useEffect, useState } from "react";
// import initializeAuthentication from "../components/Home/Login/Firebase/firebase.init";

// initializeAuthentication();


// const useFirebase = () =>{
//     const [user,setUser] = useState({});
//     const [isLoading, setIsLoading] = useState(true);
//     const auth = getAuth();

//     const signInWithGoogle = () =>{
//         setIsLoading(true);
//         const googleProvider = new GoogleAuthProvider();

//         signInWithPopup(auth, googleProvider)
//         .then(result => {
//             setUser(result.user);
//         })
//         /* ---finally will always work--- */
//         .finally(()=> setIsLoading(false));

//     }
//     /* --observer--- */
//     useEffect ( () => {
//         const unsubscribed = onAuthStateChanged(auth, user => {
//             if(user){
//                 setUser(user);
//             }
//             else(
//                 setUser({})
//             )
//             setIsLoading(false);
//         });

//         return () => unsubscribed;
//     },[])

//     const logOut = () => {
//         setIsLoading(true);
//         signOut(auth)
//         .then(() => { })
//         .finally(()=> setIsLoading(false));

//     }

//     return{
//         user,
//         isLoading,
//         signInWithGoogle,
//         logOut
//     }
// }

// export default useFirebase ;


import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Home/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  
 const [user , setUser]=useState({})
const [isLoading , setIsLoading] =useState(true)
  const auth = getAuth()
  const googleProvider= new GoogleAuthProvider()


useEffect(() =>{
     const unsubscribe = onAuthStateChanged(auth , (user)=> {
        console.log(user);
          if(user){
               
              setUser(user)
          } else{
              setUser({})
          }
          setIsLoading(false)
     })
      return ()=> unsubscribe()
},[])
 

  const signInWithGoogle=()=> {
   return  signInWithPopup(auth, googleProvider)
 
  }


const  createAccountWithGoogle =(email , password)=> {

    return createUserWithEmailAndPassword(auth, email, password)
}


const loginWithEmailAndPassword =(email,password)=> {
    return signInWithEmailAndPassword(auth, email, password)
}
    

const updateName= (name)=> {
  updateProfile(auth.currentUser, {
    displayName: name
  }).then(() => {
    const newUser={...user, displayName: name} // recommend
   setUser(newUser)
    
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });
}

 const logOut=()=> {
    signOut(auth).then(() => {
        setUser({})
      }).catch((error) => {
        // An error happened.
      });
 }

    return {
       user,setUser,
       signInWithGoogle,
       createAccountWithGoogle,
       loginWithEmailAndPassword,
       isLoading,
       setIsLoading,
       logOut,
       updateName
       
    }
}

export default useFirebase;