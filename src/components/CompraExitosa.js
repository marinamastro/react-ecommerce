import React , {useState,useEffect} from "react"
import {getFirestore} from "../firebase"
import { useParams } from "react-router-dom";
import {useCartContext} from "../context/CartContext"
import DetalleOrdenItem from "./DetalleOrdenItem"

function CompraExitosa () {
    const [order,setOrder] = useState();   
    const {id} = useParams();   
    const {clear} = useCartContext();   

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
            <p>Fecha: {order.map(x=>x.date.toDate().toString())}</p> 
            <p>Email: {order.map(x=>x.buyer.email)}</p> 
            <p>Nombre: {order.map(x=>x.buyer.nombre)}</p>
            <p>Apellido: {order.map(x=>x.buyer.apellido)}</p>
            <p>Telefono: {order.map(x=>x.buyer.tel)}</p>
            <p>Dirección de envio: {order.map(x=>x.buyer.direccion)}</p>
        </div>
        <DetalleOrdenItem order={order}/>
        <button>PAGAR</button>
        <p style={{marginTop:"1rem",fontSize:"0.9rem"}}>LAS ÓRDENES TIENEN UNA DURACIÓN DE 7 DÍAS</p>
    </div>}
    </section>
}

export default CompraExitosa