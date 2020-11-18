import React, { useState } from "react"
import ItemCount from "./ItemCount"
import Promo from "./Promo"
import IconosDetail from "./IconosDetail"
import {Link} from "react-router-dom"
import Loading from "./Loading"

function ItemDetail ({producto}) {
    const [cantidad,setCantidad] = useState()

    function onAdd (count) {
        setCantidad(count)       
    }

   return !producto ? <Loading/> :  producto&&producto.map(x=>{        
      return (
          <div className="detail-container" key={x.id}>
              <img src={window.location.origin+"/img/"+x.imageId+".png"} alt={x.title} width="25%"/>
              <div>
                  <h1 style={{marginTop:"2rem"}} className="margin-end">{x.title}</h1>
                    <p className="margin-end">
                        {x.description}
                    </p>
                  <div style={{position:"relative",width:"60%"}}>
                    {!cantidad ? <ItemCount stock={4} initial={1} onAdd={onAdd} item={x}/> : 
                    <div className="agregar">
                        <Link to="/cart"><button style={{marginLeft:0}}>Terminar compra</button></Link>
                    </div> }                 
                    <IconosDetail styles={{display:"flex",justifyContent:"space-around",marginTop:"2rem",width:"90%"}}/>                    
                    <Promo style={{fontSize:"0.8rem",background:"yellow",width:"90%",position:"absolute", bottom:"-33px", overflow:"hidden"}}/> 
                  </div>
                                                          
              </div>
             
          </div>
     
      )
   })
} 

export default ItemDetail