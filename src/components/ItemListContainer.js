import React, {useState,useEffect} from "react"
import ItemList from "./ItemList"
import Loading from "./Loading"
import {getFirestore} from "../firebase"

function ItemListContainer ({titulo}){
    const [productos,setProductos] = useState();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        itemCollection.get().then((snapshot)=>{
            if(snapshot.size===0){
                console.log("No results")
            }
            setProductos(snapshot.docs.map(doc =>({id:doc.id, ...doc.data()})))
        })
        .catch(error=>console.log(error))
        return ()=>{
            setProductos()
        }
    }, [])  

    return (
        <main>
            <h2 className="title-item-container">{titulo}</h2>          
            {productos ? <ItemList productos = {productos} /> : <Loading/>}           
        </main>
    )
}

export default ItemListContainer