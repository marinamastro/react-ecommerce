import React from "react";
import {BiUser} from "react-icons/bi";
import CartWidget from "./CartWidget"

function NavBar (){
    return (
        <nav>
            <h1 className="marca">SUPERFLUID</h1>
            <div className="shop-about">
                <span>SHOP</span>
                <span>ABOUT</span>
            </div>
            <div>
                <CartWidget/>
                <span className="icon"><BiUser/></span>                
            </div>
        </nav>
    )
}

export default NavBar