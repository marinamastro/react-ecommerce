import React from "react"
import {Link} from "react-router-dom"
import {useCartContext} from "../context/CartContext"

function Item ({producto}) {
    const {cart,addItem} = useCartContext();

   
    
    return <div className="item">
        <h2 className="animacion-item">SUPERFLUID</h2>
        <Link to={`/items/${producto.id}`}> 
        <img src={producto.pictureUrl} alt={producto.title} height="80%" className="item-img"/>
        </Link>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <h4>{producto.title}</h4>
            <h4 className="price">${producto.price}</h4>
        </div>
        <button className="add-to-cart" onClick={()=>addItem({item:producto,cantidad:1})}>AGREGAR</button>
    </div>

}

export default Item