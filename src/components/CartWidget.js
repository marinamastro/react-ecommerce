import React from "react"
import {FiShoppingCart} from "react-icons/fi"
import {Link} from "react-router-dom"


function CartWidget() {
    return (
        <Link to="/cart" style={{color:"inherit"}}>
            <span className="icon" style={{marginRight:"1rem"}}><FiShoppingCart/></span>
        </Link>
    )
}

export default CartWidget