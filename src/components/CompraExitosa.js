import React , {useState,useEffect} from "react"
import {getFirestore} from "../firebase"
import { useParams } from "react-router-dom";
import {useCartContext} from "../context/CartContext"

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
      
console.log(order)
    return <section className="compra-exitosa">
        <h1>COMPRA REALIZADA EXITOSAMENTE</h1>
        {order&&<h2>id de orden: {order.map(x=>x.id)}</h2>}
    </section>
}

export default CompraExitosa