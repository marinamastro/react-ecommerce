import React from "react"
import {useCartContext} from "../context/CartContext"
import {Link} from "react-router-dom"
import CartContainer from "./CartContainer"

function Cart () {
    const {cart} = useCartContext();
   
    return (
    <section className="cart">
        {cart.length!==0 ? <CartContainer/>
       : <h3 className="cart-vacio">
            TU CARRITO ESTÁ VACIO :( <br></br>
            <Link to="/">IR AL CATALOGO</Link>
        </h3>
        }       
    </section>
    )
}

export default Cart