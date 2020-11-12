import React from "react"
import {useCartContext} from "../context/CartContext"
import ItemCart from "./ItemCart"


function CartContainer () {
    const {cart} = useCartContext();
    let total=0;
    return (<>      
        { cart.map(x=> {
            total+=x.item.price*x.cantidad;
            return <ItemCart item={x}/>
        })}
        <div className="item-cart total">
            <p>TOTAL : ${total}</p>
            {total>500 ? <p className="envio">SI! ENVIO GRATIS</p> : null}
            <button>COMPRAR</button>           
        </div> 
    </>)
}

export default CartContainer