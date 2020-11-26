import React from "react"

function DetalleOrdenItem ({order}) {
    let total;
    let costoEnvio= 500;
    
    return (
        <div className="items">
            {order.map(x=>{
                total=x.total
                return x.items}).map(y=>{
                    return y.map(z=>{
                        return <>
                        <p>
                        <i>{z.title}</i>  x  {z.cantidad} unidad(es) ~ ${z.price} ~ Total {z.cantidad*z.price}
                        </p>                    
                        <br/>                   
                        </>})
                })            
            }
                <p>TOTAL COMPRA: $ {total}</p>
                <p>Costo de envio:  {total>500 ? "gratis" : "$"+costoEnvio}</p>
                <p><b>TOTAL: $ {(total>500 ? 0 : costoEnvio) + total}</b></p>
        </div>
    )}

export default DetalleOrdenItem