import React from "react"
import {BiUser} from "react-icons/bi"
import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"
import  "../css/navbar.css"

function NavBar (){
    return (
        <nav>
            <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
                <h1 className="marca">SUPERFLUID</h1>
            </Link>
            <div className="categorias">
                <span>LIPS</span>
                <span>EYES</span>
                <span>FACE</span>
            </div>
            <div>
                <CartWidget/>
                <span className="icon"><BiUser/></span>                
            </div>
        </nav>
    )
}

export default NavBar