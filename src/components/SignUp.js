import React, {useState} from "react"
import useInput from "./UseInput"
import {useAuth} from "../context/AuthContext"
import {Link} from "react-router-dom"

function SignUp () {
    const {signup} = useAuth();
    const emailInput = useInput({defaultValue: "", extras: { placeholder: "Email",type:"email",autoComplete:"on" }});
    const passwordInput = useInput({defaultValue: "",extras: { placeholder: "Contraseña",type:"password" }});
    const passwordConfirmInput = useInput({defaultValue: "",extras: { placeholder: "Repite la Contraseña",type:"password" }});
    const [error,setError] = useState("")
    const [loadding,setLoadding] = useState(false)

    function onSubmit (e){
        e.preventDefault();
        if(passwordInput.value!==passwordConfirmInput.value){
            return setError("Las contraseñas no coinciden")
        }
        signup(emailInput.value,passwordConfirmInput.value).then((x)=>{
            setLoadding(true);
            setError("");
            console.log(x)
        })
        .catch((er)=>setError(er.message))
    }

    return (
        <section className="signContainer">
            <h1>Registrarme</h1>
            <form onSubmit={onSubmit}>
                <input {...emailInput} required/>
                <input {...passwordInput} required/>
                <input {...passwordConfirmInput} required/>
                {error&&<p className="error">{error}</p>}
                <button type="submit" disabled={loadding} >REGISTRARME</button>
                <p className="crearC">Ya tenés una cuenta? <Link to="/login">Ingresá</Link></p>
            </form>           
        </section>
    )
}

export default SignUp