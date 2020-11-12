import React from "react"

function Promo ({style={ background:"yellow",width:"30%",position:"absolute", bottom:"10%",right:"2%",
overflow:"hidden"}}){
     
    return <div style={style}>
    <div className="promo">
        <pre>ENVIO GRATIS A PARTIR DE $500 </pre>                  
        <pre>· 10% DE DESCUENTO INCRIBIÉNDOTE A NUESTRO NEWSLETTER </pre>  
        <pre>· ENVÍO GRATIS A PARTIR DE $500 </pre>
        <pre>· 10% DE DESCUENTO INCRIBIÉNDOTE A NUESTRO NEWSLETTER </pre> 
    </div> 
</div>
} 

export default Promo