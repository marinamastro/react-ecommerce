import React from "react";
import {BiUser} from "react-icons/bi"

function NavBar (){
    return (
        <nav>
            <h1 className="marca">SUPERFLUID</h1>
            <div className="shop-about">
                <span>SHOP</span>
                <span>ABOUT</span>
            </div>
            <div>
                <span>CARRITO</span>
                <span className="icon-user"><BiUser/></span>                
            </div>
        </nav>
    )
}

export default NavBar