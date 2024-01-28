import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from  'firebase/auth'
import app from "../Firebase/Firebase.config";
import { useSearchParams } from "react-router-dom";

export const authContext= createContext(null);

const auth= getAuth(app)


const ContextProvider = ({children}) => {
    const [user, setUser]= useState(null)

    



    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser= (email, password)=>{
        return signInWithEmailAndPassword(auth, email , password)
        }


        useEffect(()=>{
         const unsubscribe=   onAuthStateChanged(auth, (user)=>{
        
              setUser(user)
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
    }
    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default ContextProvider;