import React,{useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import {getFirestore} from "../firebase"
import Item from "./Item"
import Loading from "./Loading"

function Categoria (){
    const {categoryId} = useParams();
    const [items,setItems] = useState();

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const categories = itemCollection.where("categoryId","==",categoryId);
        categories.get().then((items)=>{
            if(!items.exists){
                console.log("no hay items en esta categoria")              
            }
            
        setItems(items.docs.map(item=>({id:item.id,...item.data()})))
        })
   },[categoryId])
   
return items ?<section className="categoria-container">
    <h1>{categoryId}</h1>
    {items.map(x=><Item producto={x} key={x.id}/>)}
</section>
:<Loading/>
}

export default Categoria