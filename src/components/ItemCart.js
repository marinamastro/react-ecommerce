import React from "react"
import {useCartContext} from "../context/CartContext"

function ItemCart ({item}){
    const {removeItem} = useCartContext();
    return (
        <div className="item-cart">
            <img src={item.item.pictureUrl} alt={item.item.title} width="3%" />
            <h4>{item.item.title}</h4>
            <p>x {item.cantidad}</p> 
            <p>${item.item.price*item.cantidad}</p>
            <button onClick={()=>removeItem(item.item.id)}>ELIMINA</button>
        </div>
    )
}

export default ItemCart