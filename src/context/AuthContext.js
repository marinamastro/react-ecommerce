import React,{useState,useContext,useEffect} from "react"
import {getAuth} from "../firebase"

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider ({children}) {
    const [currentUser,setCurrentUser] = useState();   

    function signup (email,password){
        return getAuth().createUserWithEmailAndPassword(email,password) //devuelve promesa
    }

    function login (email,password){
        return getAuth().signInWithEmailAndPassword(email,password)
    }

    function logout (){
       return getAuth().signOut() 
    }

    function passwordReset (email){
        return getAuth().sendPasswordResetEmail(email)
    }

    useEffect(()=>{
      const unsuscribe= getAuth().onAuthStateChanged(user=>{
            setCurrentUser(user)            
        })  
        return unsuscribe    
    },[])
   

    const value = {currentUser,signup,login,logout,passwordReset}

    return <AuthContext.Provider value={value}>       
        {children}      
    </AuthContext.Provider>
}