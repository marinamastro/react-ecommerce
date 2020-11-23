import React,{useState,useContext,useEffect} from "react"
import {getAuth} from "../firebase"

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider ({children}) {
    const [currentUser,setCurrentUser] = useState();
    const [loading,setLoading] = useState(true)

    function signup (email,password){
        return getAuth().createUserWithEmailAndPassword(email,password) //devuelve promesa
    }

    function login (email,password){
        return getAuth().signInWithEmailAndPassword(email,password)
    }

    function logout (){
       return getAuth().signOut() 
    }

    useEffect(()=>{
        const unsuscribe =  getAuth().onAuthStateChanged(user=>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unsuscribe
    },[])
   

    const value = {currentUser,signup,login,logout}

    return <AuthContext.Provider value={value}>
        {/* {!loading && children}  */}
        {children}
        {/* no se renderiza nada hasta que este el usuario, para no hacer user&&user por ej */}
    </AuthContext.Provider>
}