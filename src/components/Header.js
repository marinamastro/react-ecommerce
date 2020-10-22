import React, {useState} from "react"
import NavBar from "./NavBar"
import Newsletter from "./Newsletter"

function Header() {    
    const style={
        background:"yellow",
        width:"30%",
        position:"absolute", 
        bottom:"10%",
        right:"2%",
        overflow:"hidden"
    }

    const [close,setCloseNewsletter] = useState(false)
 
    return (
        <header>
            <NavBar/>
            <div style={style}>
                <p className="promo">
                    <span><pre>ENVIO GRATIS A PARTIR DE $500 </pre></span>                    
                    <span><pre>· 10% DE DESCUENTO INCRIBIÉNDOTE A NUESTRO NEWSLETTER </pre></span>  
                    <span><pre>· ENVÍO GRATIS A PARTIR DE $500 </pre></span> 
                    <span><pre>· 10% DE DESCUENTO INCRIBIÉNDOTE A NUESTRO NEWSLETTER </pre></span>  
                </p> 
            </div>
           {!close && <Newsletter close = {setCloseNewsletter}/>}
        </header>
    )
}

export default Header