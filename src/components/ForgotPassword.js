import React, {useState} from "react"
import useInput from "./UseInput"
import {useAuth} from "../context/AuthContext"
import {Link} from "react-router-dom"

function ForgotPassword () {
    const {passwordReset} = useAuth();
    const emailInput = useInput({defaultValue: "", extras: { placeholder: "Email",type:"email",autoComplete:"on" }});
    const [message,setMessage] = useState("")
    const [error,setError] = useState("")
    const [loadding,setLoadding] = useState(false)
    

    function manejoErrores(error){
        if(error.code==="auth/user-not-found"){
            setError("Usuario inexistente")
        }else{
            setError(error.message)
        }
    }

    function onSubmit (e){
        e.preventDefault();   
        setMessage("")    
        passwordReset(emailInput.value).then((x)=>{
            setMessage("Te enviamos un correo con las instrucciones")
            setLoadding(true);
            setError("");                      
        })
        .catch((er)=>{ 
            console.log(er)           
            return manejoErrores(er);           
        })
    }

    return (
        <section className="authContainer">
            <h1>Reestablecer Contraseña</h1>
            <form onSubmit={onSubmit}>
                <input {...emailInput} required/>             
                {error&&<p className="error">{error}</p>}
                <button type="submit" disabled={loadding} >Reestablecer contraseña</button>
                {<p className="message">{message}</p>}
                <p className="crearC"><Link to="/login">Iniciar Sesión</Link></p>
               
            </form>          
        </section>
    )
}

export default ForgotPassword