import React , {useState,useEffect} from "react"
import {getFirestore} from "../firebase"
import { useParams } from "react-router-dom";
import {useCartContext} from "../context/CartContext"

function CompraExitosa () {
    const [order,setOrder] = useState();   
    const {id} = useParams();   
    const {clear} = useCartContext();
    let total;
    let costoEnvio= 500;

    useEffect(() => {        
        const db = getFirestore();
        const orderCollection = db.collection("orders");
        const order = orderCollection.doc(id);
        order.get().then((order)=>{
            if(order.size===0){
                console.log("No orders")
            }           
            setOrder([{id:order.id, ...order.data()}]);
            clear()
        })
        .catch(error=>console.log(error))
    }, [id]);
      

    return <section>
    <div className="compra-exitosa">
        <h1>ORDEN EMITIDA EXITOSAMENTE :D</h1>       
    </div>
    {order&&<div  className="container-detalle">  
        <div className="detalle-compra">
            <h2>Detalle de compra</h2>
            {<p>ID: {order.map(x=>x.id)}</p>}
        </div>
        <div className="datos">
            {/* creo que esta no es la forma correcta de mostrar los datos */}
            <p>Email: {order.map(x=>x.buyer.email)}</p> 
            <p>Nombre: {order.map(x=>x.buyer.nombre)}</p>
            <p>Apellido: {order.map(x=>x.buyer.apellido)}</p>
            <p>Telefono: {order.map(x=>x.buyer.tel)}</p>
            <p>Dirección de envio: {order.map(x=>x.buyer.direccion)}</p>
        </div>
        <div className="items">
        {order.map(x=>{
            total=x.total
            return x.items}).map(y=>{
                return y.map(z=>{
                    return <>
                    <p>{z.title}  ~  {z.cantidad} unidad(es) ~ ${z.price}</p>                    
                    <br/>                   
                    </>})
            })            
        }
            <p>TOTAL COMPRA: $ {total}</p>
            <p>Costo de envio:  {total>500 ? "gratis" : "$"+costoEnvio}</p>
            <p><b>TOTAL: $ {(total>500 ? 0 : costoEnvio) + total}</b></p>
        </div>
        <button>PAGAR</button>
    </div>}
    </section>
}

export default CompraExitosa