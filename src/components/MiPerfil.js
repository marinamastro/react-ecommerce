import React, { useEffect,useState } from "react"
import {useAuth} from "../context/AuthContext"
import {getFirestore} from "../firebase"
import DetalleOrdenItem from "./DetalleOrdenItem"

function MiPerfil () {
    const {currentUser} = useAuth();
    const [orders,setOrders] = useState();
    
    useEffect(()=>{
        if(currentUser){
       const db = getFirestore();
        const orderCollection = db.collection("orders");
        const orders = orderCollection.where("email","==",currentUser.email.toString());
        orders.get().then((orders)=>{
            if(!orders.exists){
                console.log("no hay ordenes del usuario")              
            }            
        setOrders(orders.docs.map(order=>({id:order.id,...order.data()})))
        })  }      
    },[currentUser])


    return (
    <section className="categoria-container miperfil">
        <h3>Mi cuenta</h3>
        <h4>{currentUser&&currentUser.email}</h4>
        <h3>Mis compras</h3>       
    {orders&&
        <div className="ordenes">
            <h4 className="pendiente-pago">PENDIENTES DE PAGO</h4>
            <DetalleOrdenItem order={orders.filter(x=>x.status==="generada")}/>       
        </div> 
        }
        {/* En construccion */}
        
    </section>
    )
}

export default MiPerfil