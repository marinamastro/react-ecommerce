import React,{useEffect,useState} from "react"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer () {
    const [producto,setProducto] = useState()
    useEffect(() => {
        const promise = new Promise ((resolve,reject)=>{
            setTimeout(()=>resolve([{id:1,title:"COOLER EYE GEL",price:199,pictureUrl:"http://images.ctfassets.net/vnxry7jc7f2k/3GJLJl7dD0yzNt0pzFgqzp/904036e327b01591e5b22ca8485c42dc/04_SUPERFLUID_EYEGEL.png?w=300&q=80"}]),2000)
        })
        promise.then(product =>{
            setProducto(product)
        })
        return () => {
            setProducto("")
        }
    }, [])  
    
    return (
        <ItemDetail producto = {producto} />
    )
}

export default ItemDetailContainer