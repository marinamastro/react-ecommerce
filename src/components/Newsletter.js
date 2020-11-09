import React from "react"
import InputNewsletter from "./InputNewsletter"

function Newsletter ({close}){
    return(
        <div className="newsletter">
            <button className="x" onClick={()=>close(true)}>x</button>
            <p>10% DE DESCUENTO EN TU PRIMER PEDIDO</p>
            <InputNewsletter/>
        </div>
    )
}

export default Newsletter