import React from "react"

function DetalleOrdenItem ({order}) {   

    return (
        <div className="items">
           {order.map(x=>{
               return <div> <p>Fecha: {x.date.toDate().toString()}</p>
               <p>ID: {x.id}</p>
               <br></br>
               <div>{x.items.map(y=>{                  
                   return <p>
                       <i>{y.title}</i> ~ 
                       ${y.price} X {y.cantidad} unidad(es) ~ 
                       total ${y.price*y.cantidad}
                       </p>
                    })}
               </div>
               <br></br>
                <p>TOTAL PRODUCTOS: $ {x.total}</p>
               <p>Costo de envio: $ {x.envio}</p>
               <p><b>TOTAL: $ {x.total+x.envio}</b></p>              
               <hr></hr>
               <br></br>
           </div>})}
        </div>
    )}

export default DetalleOrdenItem