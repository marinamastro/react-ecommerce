import React from "react"

function ItemListContainer ({titulo}){
    const style={
        textAlign:"center",
        fontWeight:"600",
        fontSize:"3rem",
        marginTop:"3rem"
    }
    return (
        <main>
            <h2 style={style}>{titulo}</h2>
        </main>
    )
}

export default ItemListContainer