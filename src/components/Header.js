import React,{useRef} from "react"
import NavBar from "./NavBar"

function Header() {
    const style={
        background:"yellow",
        width:"30%",
        position:"absolute", 
        bottom:"10%",
        right:"2%",
        overflow:"hidden"
    }
    const newsletter = useRef(null);
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
            <div className="newsletter" ref={newsletter}>
                <button className="x" onClick={()=>newsletter.current.classList.add("hide")}>x</button>
                <p>10% DE DESCUENTO EN TU PRIMER PEDIDO</p>
                <form>
                <input type="email" placeholder="Email"/>
                <button>OK</button>
                </form>
                

            </div>
        </header>
    )
}

export default Header