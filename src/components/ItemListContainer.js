import React from "react"
import ItemCount from "./ItemCount"

function ItemListContainer ({titulo}){
    const style={
        textAlign:"center",
        fontWeight:"600",
        fontSize:"3rem",
        marginTop:"3rem"
    }
    function onAdd (count) {
        alert(`se agregaron ${count} items al carrito`)
    }
    return (
        <main>
            <h2 style={style}>{titulo}</h2>
            <ItemCount stock="4" initial="1" onAdd={onAdd} />
        </main>
    )
}

export default ItemListContainer