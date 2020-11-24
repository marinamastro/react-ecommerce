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

    function crearParrafos (description) {
        return description.split(".");      
    }

   return !producto ? <Loading/> :  producto&&producto.map(x=>{        
      return (
          <div className="detail-container" key={x.id}>
              <img src={window.location.origin+"/img/"+x.imageId+".png"} alt={x.title} width="25%"/>
              <div>
                  <h1 style={{marginTop:"2rem"}} className="margin-end">{x.title}</h1>
                    <div className="margin-end">
                        {crearParrafos(x.description).map(x=>
                        <p style={{margin:"0.5rem 0"}} >
                            {x}
                        </p>)}
                    </div>               
                  <div style={{position:"relative",width:"60%"}}>
                    {!cantidad ? <ItemCount stock={x.stock} initial={1} onAdd={onAdd} item={x}/> : 
                    <div className="agregar">
                        <Link to="/cart"><button style={{marginLeft:0}}>Terminar compra</button></Link>
                    </div> }   
                    {x.stock<=5 && <p className="apurate">🙈 Solo quedan {x.stock} unidades !</p>}              
                    <IconosDetail styles={{display:"flex",justifyContent:"space-around",marginTop:"2rem",width:"90%"}}/>                    
                    <Promo style={{fontSize:"0.8rem",background:"yellow",width:"90%",position:"absolute", bottom:"-33px", overflow:"hidden"}}/> 
                  </div>
                                                          
              </div>
             
          </div>
     
      )
   })
} 

export default ItemDetail