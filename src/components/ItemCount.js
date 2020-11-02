import React,{useState} from "react"


function ItemCount ({stock,initial,onAdd,price}) {
    const [count,setCount] = useState(initial);
    const quitar = () =>  setCount(count-1);
    const agregar = () => setCount(parseInt(count)+1);

    return (
        <div className="item-count">
            <div className="contador">
                <button onClick={()=>{ if(count>0) quitar()}}> - </button>           
                <span style={{padding:"1rem"}}>{count}</span>
                <button onClick={()=>{ if(stock>count) agregar()}}> + </button>
            </div>            
            <div className="agregar">
                <button onClick={()=>onAdd(count)}>${price*count} - Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount