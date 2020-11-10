import React,{useState} from "react"
import {useCartContext} from "../context/CartContext"


function ItemCount ({stock,initial,onAdd,item}) {
    const {addItem} = useCartContext();
    const [cantidad,setCantidad] = useState(initial);
    const quitar = () =>  setCantidad(cantidad-1);
    const agregar = () => setCantidad(parseInt(cantidad)+1);

    return (
        <div className="item-count">
            <div className="contador">
                <button onClick={()=>{ if(cantidad>1) quitar()}}> - </button>           
                <span style={{padding:"1rem"}}>{cantidad}</span>
                <button onClick={()=>{ if(stock>cantidad) agregar()}}> + </button>
            </div>            
            <div className="agregar">
                <button onClick={()=>{onAdd(cantidad);addItem({item,cantidad})}}>${item.price*cantidad} - Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount