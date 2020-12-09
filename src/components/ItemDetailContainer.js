import React,{useEffect,useState} from "react"
import ItemDetail from "./ItemDetail"
import {getFirestore} from "../firebase"
import { useParams } from "react-router-dom";

function ItemDetailContainer () {
    const [producto,setProducto] = useState();
    const {id} = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const item = itemCollection.doc(id);
        item.get().then(item=>{
            if(!item.exists){
                console.log("item no encontrado");
                setProducto({})
            }else{
            setProducto({id:item.id, ...item.data()})
        }})
        .catch(error=>console.log(error))
    }, [id])  
    
    return (
        <ItemDetail producto = {producto} />
    )
}

export default ItemDetailContainer