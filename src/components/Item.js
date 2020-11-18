import React from "react"
import {Link} from "react-router-dom"
import {useCartContext} from "../context/CartContext"

function Item ({producto}) {
    const {cart,addItem} = useCartContext();

    function isInCart(producto){       
        return cart.find(x=>x.item.id===producto.id)  
    }

    return <div className="item">
        <h2 className="animacion-item">SUPERFLUID</h2>
        <Link to={`/items/${producto.id}`}> 
        <img src={window.location.origin+"/img/"+producto.imageId+".png"} alt={producto.title} height="80%" className="item-img"/>
        </Link>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <h4>{producto.title}</h4>
            <h4 className="price">${producto.price}</h4>
        </div>
        <button 
        className={isInCart(producto) ? "is-in-cart" : "add-to-cart"}
        onClick={()=>addItem({item:producto,cantidad:1})}
        disabled={ isInCart(producto) ? true : false}
        >
           { isInCart(producto) ? "AGREGADO" : "AGREGAR" }
        </button>
    </div>

}

export default Item