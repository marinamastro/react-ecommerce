import React,{useState} from "react"


function ItemCount ({stock,initial,onAdd}) {
    const [count,setCount] = useState(initial);
    const quitar = () =>  setCount(count-1);
    const agregar = () => setCount(parseInt(count)+1);

    return (
        <div style={{textAlign:"center",margin:"3rem 0"}}>
            <button onClick={()=>{ if(count>0) quitar()}}> - </button>           
            <span style={{padding:"1rem"}}>{count}</span>
            <button onClick={()=>{ if(stock>count) agregar()}}> + </button>
            <div style={{marginTop:"0.5rem"}}>
                <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount