import React from "react"
import {useCartContext} from "../context/CartContext"
import ItemCart from "./ItemCart"


function CartContainer () {
    const {cart,clear} = useCartContext();
    let total=0;
    return (<>      
        { cart.map(x=> {
            total+=x.item.price*x.cantidad;
            return <ItemCart item={x}/>
        })}
        <div className="item-cart total">
            <p>TOTAL : ${total}</p>
            {total>500 ? <p className="envio">SI! ENVIO GRATIS</p> : null}
            <div>
                <button className="vaciar" onClick={clear}>VACIAR CARRITO</button>
                <button>COMPRAR</button> 
            </div>          
        </div> 
    </>)
}

export default CartContainer