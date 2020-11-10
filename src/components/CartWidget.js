import React from "react"
import {FiShoppingCart} from "react-icons/fi"
import {Link} from "react-router-dom"
import {useCartContext} from "../context/CartContext"

function CartWidget() {
    const {cart} = useCartContext();
    return (
        <Link to="/cart" style={{color:"inherit"}}>
            <span className="icon" style={{marginRight:"1rem"}}>
                <FiShoppingCart/>
                <span className="cart-length">{cart.length}</span>
            </span>
        </Link>
    )
}

export default CartWidget