import React from "react"
import {BiUser} from "react-icons/bi"
import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"


function NavBar (){
    return (
        <nav>
            <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
                <h1 className="marca">SUPERFLUID</h1>
            </Link>
            <div className="categorias">
                <Link to="/categoria/lips"><span>LIPS</span></Link>
                <Link to="/categoria/eyes"><span>EYES</span></Link>
                <Link to="/categoria/face"><span>FACE</span></Link>
            </div>
            <div>
                <CartWidget/>
                <span className="icon"><BiUser/></span>                
            </div>
        </nav>
    )
}

export default NavBar