import React, {useState} from "react"
import useInput from "./UseInput"
import {useAuth} from "../context/AuthContext"
import {Link,useHistory} from "react-router-dom"

function SignUp () {
    const {signup} = useAuth();
    const emailInput = useInput({defaultValue: "", extras: { placeholder: "Email",type:"email",autoComplete:"on" }});
    const passwordInput = useInput({defaultValue: "",extras: { placeholder: "Contraseña",type:"password" }});
    const passwordConfirmInput = useInput({defaultValue: "",extras: { placeholder: "Repite la Contraseña",type:"password" }});
    const [error,setError] = useState("")
    const [loadding,setLoadding] = useState(false)
    const history = useHistory();

    function manejoErrores(error){
        switch (error.code) {
            case "auth/email-already-in-use":
                setError("Este correo ya se encuentra en uso")
                break;
            case "auth/weak-password":
                setError("La contraseña debe tener al menos 6 caracteres");
                break;
            default:
                setError(error.message)
                break;
        }
    }

    function onSubmit (e){
        e.preventDefault();
        setLoadding(true);
        setError("");
        if(passwordInput.value!==passwordConfirmInput.value){
            setLoadding(false);
            return setError("Las contraseñas no coinciden")
        }
        signup(emailInput.value,passwordConfirmInput.value).then((x)=>{
            setLoadding(false);
            history.push("/")
            setError("");            
        })
        .catch((er)=>{  
            setLoadding(false);          
            return manejoErrores(er)})
    }

    return (
        <section className="authContainer">
            <h1>Registrarme</h1>
            <form onSubmit={onSubmit}>
                <input {...emailInput} required/>
                <input {...passwordInput} required/>
                <input {...passwordConfirmInput} required/>
                {error&&<p className="error">{error}</p>}
                <button type="submit" disabled={loadding} >{loadding ?"CARGANDO" :"REGISTRARME E INICIAR SESIÓN"}</button>
                <p className="crearC">Ya tenés una cuenta? <Link to="/login">Ingresá</Link></p>
            </form>           
        </section>
    )
}

export default SignUp