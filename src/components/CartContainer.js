import React,{useState} from "react"
import {useCartContext} from "../context/CartContext"
import ItemCart from "./ItemCart"
import useInput from "./UseInput"
import {useAuth} from "../context/AuthContext"
import {Link,useHistory} from "react-router-dom"
import {getFirestore} from "../firebase"
import * as firebase from "firebase/app"
import "firebase/firestore"

function CartContainer () {
    const nombreInput = useInput({defaultValue: "", extras: { placeholder: "Nombre",type:"text"}});
    const apellidoInput = useInput({defaultValue: "", extras: { placeholder: "Apellido",type:"text"}});
    const telefonoInput = useInput({defaultValue: "", extras: { placeholder: "Teléfono",type:"text"}}); 
    const direInput = useInput({defaultValue: "", extras: { placeholder: "Dirección de envio",type:"text"}});    
    const {cart,clear} = useCartContext();
    const [comprar,setComprar] = useState(false);
    const {currentUser} = useAuth();
    const [loading,setLoading] = useState(false);
    const history = useHistory();

    let total=0;

    function createOrder(e){
        e.preventDefault();
        setLoading(true)
        const newOrder = {
            buyer: {nombre:nombreInput.value,
                    apellido:apellidoInput.value,
                    tel:telefonoInput.value,
                    email:currentUser.email,
                    direccion:direInput.value
                },
            items:cart.map(x=>({id:x.item.id,title:x.item.title,price:x.item.price,cantidad:x.cantidad})),
            total:total,
            envio:total>500 ? 0 : 500,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            status:"generada",
            email:currentUser.email //para usar el where ya que no puedo hacer where buyer.email
        }

        const db=getFirestore();
        const orders = db.collection("orders");
        orders.add(newOrder)
        .then((doc)=>{                    
            setLoading(false);
            setComprar(false);   
            history.push("/compraexitosa/"+doc.id);
                   
        })
        .catch(er=>{console.log(er);alert("error creando order")})
    }   

    return (<>      
        { cart.map(x=> {
            total+=x.item.price*x.cantidad;
            return <ItemCart item={x}/>
        })}
        <div className="item-cart total">
            <p>TOTAL : ${total}</p>
            {total>500 ? <p className="envio">SI! ENVIO GRATIS</p> : null}
            <div>
                <button className="vaciar" onClick={clear}>VACIAR CARRITO</button>
                <button onClick={()=>setComprar(true)}>COMPRAR</button> 
            </div>          
        </div> 
        {comprar && <div className="authContainer checkout">
            { currentUser ? 
            <form onSubmit={createOrder}>
                <p className="text">
                   Email: {currentUser.email} 
                </p>
                <input {...nombreInput} required/>
                <input {...apellidoInput} required/>
                <input {...telefonoInput} required/>
                <input {...direInput} required/>
                <button disabled={loading}>{loading ? "CARGANDO" : "REALIZAR COMPRA"}</button>
            </form> :  
            <p className="text">
               <strong><Link to="/login">Iniciá sesión</Link> para poder completar tu compra!</strong>
            </p>}  
    </div> }
         
    </>)
}

export default CartContainer