import React from "react"
import {FiShoppingCart} from "react-icons/fi"
import {Link} from "react-router-dom"
import {useCartContext} from "../context/CartContext"

function CartWidget() {
    const {cart} = useCartContext();

    function cantidadItems () {
        let cantidad = 0;
        cart.forEach(element => {
            return cantidad+=element.cantidad
        });       
        return cantidad
    }

    return (
        <Link to="/cart" style={{color:"inherit"}}>
            <span className="icon" style={{marginRight:"1rem"}}>
                <FiShoppingCart/>
                <span className="cart-length">{cantidadItems()}</span>
            </span>
        </Link>
    )
}

export default CartWidget