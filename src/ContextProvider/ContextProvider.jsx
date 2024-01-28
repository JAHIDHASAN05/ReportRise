import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from  'firebase/auth'
import app from "../Firebase/Firebase.config";
import { useSearchParams } from "react-router-dom";

export const authContext= createContext(null);

const auth= getAuth(app)


const ContextProvider = ({children}) => {
    const [user, setUser]= useState(null)


    const [loading, setLoading] = useState(true)

    



    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser= (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email , password)
        }


        useEffect(()=>{
         const unsubscribe=   onAuthStateChanged(auth, (user)=>{
        
              setUser(user)
              setLoading(false)
            })
            return ()=>{
                unsubscribe()
            }
        },[])


    const logOut=()=>{
        return signOut(auth)
    }
    
    const userInfo={
          user,
          createUser,
          loginUser,
          logOut,
          loading,
    }
    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default ContextProvider;