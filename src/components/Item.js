import React from "react"

function Item ({producto}) {
    return  <div style={{width:"30%",height:"370px",textAlign:"center",padding:"1.5rem 0",margin:"0.5rem",background:"#e4e4e4"}}>
    <img src={producto.pictureUrl} alt="04 SUPERFLUID EYEGEL" loading="lazy" height="80%" className="item-img"/>
    <div style={{display:"flex",justifyContent:"space-around"}}>
        <h4>{producto.title}</h4>
        <h4 className="price">${producto.price}</h4>
     </div>
     <button className="add-to-cart">AGREGAR</button>
</div>
}

export default Item