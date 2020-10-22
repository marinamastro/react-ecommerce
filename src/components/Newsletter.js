import React from "react"

function Newsletter ({close}){
    return(
        <div className="newsletter">
            <button className="x" onClick={()=>close(true)}>x</button>
            <p>10% DE DESCUENTO EN TU PRIMER PEDIDO</p>
            <form>
                <input type="email" placeholder="Email"/>
                <button>OK</button>
            </form>
        </div>
    )
}

export default Newsletter