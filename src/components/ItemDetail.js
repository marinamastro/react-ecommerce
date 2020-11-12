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
              <img src={x.pictureUrl} alt={x.title} width="40%"/>
              <div>
                  <h1 style={{marginTop:"2rem"}} className="margin-end">{x.title}</h1>
                    <p className="margin-end">
                        Una crema-gel súper ligera que refresca el contorno de ojos, añade hidratación y disimula las lineas de expresión en un abrir y cerrar de ojos.<br/><br/>
                        La formula contiene cafeína, que ayuda a reducir las ojeras y el hinchazón. Vamos, que aunque hayas dormido como una m****, nadie lo notará! El ácido hialuronico y el extracto de frambuesa mantienen la piel hidratada y fomentan la elasticidad de la piel.<br/><br/>
                        No por ser creídos pero…pero algunos lo llaman el salva vidas!
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