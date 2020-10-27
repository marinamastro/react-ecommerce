import React from "react"
import Item from "./Item"

function ItemList ({productos}){
    return <div style={{display:"flex",flexFlow:"row wrap",justifyContent:"center"}}>
        {productos&&productos.map(x=>{
           return <Item producto = {x} />
        })}
    </div>
}

export default ItemList