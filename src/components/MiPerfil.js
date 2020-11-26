import React from "react"
import {useAuth} from "../context/AuthContext"

function MiPerfil () {
    const {currentUser} = useAuth();

    return (
    <section className="categoria-container miperfil">
        <h3>Mi cuenta</h3>
        <h4>{currentUser&&currentUser.email}</h4>
        
        {/* En construccion */}
        
    </section>
    )
}

export default MiPerfil