import React from "react"
import ItemCount from "./ItemCount"
import Promo from "./Promo"
import IconosDetail from "./IconosDetail"

function ItemDetail ({producto}) {
    
    function onAdd (count) {
        alert(`se agregaron ${count} items al carrito`)
    }

   return !producto ? <h1>Loading</h1> :  producto&&producto.map(x=>{
      return (
          <div style={{marginTop:"3rem",display:"grid",gridTemplateColumns:"40% 40%",gridTemplateRows:"auto",justifyItems:"center",alignItems:"center"}}>
              <img src={x.pictureUrl} alt={x.title} width="40%"/>
              <div>
                  <h1 style={{marginBlockEnd:"1rem",marginTop:"2rem"}}>{x.title}</h1>
                  <p style={{marginBlockEnd:"1rem"}}>Una crema-gel súper ligera que refresca el contorno de ojos, añade hidratación y disimula las lineas de expresión en un abrir y cerrar de ojos.</p>
                  <p style={{marginBlockEnd:"1rem"}}> La formula contiene cafeína, que ayuda a reducir las ojeras y el hinchazón. Vamos, que aunque hayas dormido como una m****, nadie lo notará! El ácido hialuronico y el extracto de frambuesa mantienen la piel hidratada y fomentan la elasticidad de la piel.</p>
                  <p>No por ser creídos pero…pero algunos lo llaman el salva vidas!</p>
                  <div style={{position:"relative",width:"60%"}}>
                    <ItemCount stock={4} initial={1} onAdd={onAdd} price={x.price}/>                  
                    <IconosDetail/>                    
                    <Promo style={{fontSize:"0.8rem",background:"yellow",width:"90%",position:"absolute", bottom:"-33px", overflow:"hidden"}}/> 
                  </div>
                                                          
              </div>
             
          </div>
     
      )
   })
} 

export default ItemDetail