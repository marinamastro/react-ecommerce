import React, {useState} from "react"
import useInput from "./UseInput"
import {useAuth} from "../context/AuthContext"
import {Link,useHistory} from "react-router-dom"

function LogIn () {
    const {login} = useAuth();
    const emailInput = useInput({defaultValue: "", extras: { placeholder: "Email",type:"email"}});
    const passwordInput = useInput({defaultValue: "",extras: { placeholder: "Contraseña",type:"password" }});    
    const [error,setError] = useState("")
    const [loadding,setLoadding] = useState(false)
    const history = useHistory();

    function manejoErrores(error){
        switch (error.code) {
            case "auth/user-not-found":
                setError("Usuario inexistente")
                break;
            case "auth/wrong-password":
                setError("Contraseña incorrecta");
                break;
            default:
                setError(error.message)
                break;
        }
    }

    function onSubmit (e){
        e.preventDefault();  
        setError("");  
        setLoadding(true);         
        login(emailInput.value,passwordInput.value).then((x)=>{                    
            history.push("/");
            setError(""); 
            setLoadding(false)           
        })
        .catch((er)=>{  
            console.log(er)          
            setLoadding(false)
            return manejoErrores(er);           
        })
       
    }

    return (
        <div className="login-c">
            <section className="authContainer">
                <h1>Ingresar</h1>
                <form onSubmit={onSubmit}>
                    <input {...emailInput} required/>
                    <input {...passwordInput} required/>                
                    {error&&<p className="error">{error}</p>}
                    <button type="submit" disabled={loadding} >{ loadding ? "INICIANDO" : "INICIAR SESIÓN"}</button>
                    <p className="crearC">No tenes una cuenta? <Link to="/signup">Registrate</Link></p>
                    <p className="crearC"><Link to="/forgotpassword">Olvidé mi contraseña</Link></p>
                </form>          
            </section>
        </div>
    )
}

export default LogIn