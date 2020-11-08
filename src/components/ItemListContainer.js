import React, {useState,useEffect} from "react"
import ItemList from "./ItemList"


function ItemListContainer ({titulo}){
    const [productos,setProductos] = useState();
    useEffect(() => {
        const promise = new Promise ((resolve,reject)=>{
            setTimeout(()=>resolve([{id:1,title:"COOLER EYE GEL",price:199,pictureUrl:"http://images.ctfassets.net/vnxry7jc7f2k/3GJLJl7dD0yzNt0pzFgqzp/904036e327b01591e5b22ca8485c42dc/04_SUPERFLUID_EYEGEL.png?w=300&q=80"},{id:2,title:"LIP CHEEK",price:199,pictureUrl:"//images.ctfassets.net/vnxry7jc7f2k/7jlZKvTNGxa1ubfV9nT4GU/2065bdd2cf494fe2bc31587849253e04/04_superfluid_200421_0036_mauve_copy.png?w=300&q=80"},{id:3,title:"LIP BALM",price:199,pictureUrl:"//images.ctfassets.net/vnxry7jc7f2k/7EtX4lxmITWCGLCDU6X3Re/4eedd4a78a76f91c81f3bdc44a3c2250/03_SUPERFLUID_200421_0005_-_5-4.png?w=300&q=80"},{id:4,title:"UNLASH ME MASCARA NEGRA",price:199,pictureUrl:"//images.ctfassets.net/vnxry7jc7f2k/2dCiVa6Jmlee0OxpaptIxU/059d44fb84a0f133daf39c8e5640099a/04_SUPERFLUID_200421_0091_copy.png?w=300&q=80"},{id:5,title:"OUTLINER MARKER",price:199,pictureUrl:"//images.ctfassets.net/vnxry7jc7f2k/5vL3rRuxVeWcZy75oqxa84/ddab3d10752f88ebcf2150f18494f2aa/04_SUPERFLUID_200421_0064_-_4-3_copy.png?w=300&q=80"},{id:6,title:"BRIGTH HIGHLIGHTER",price:99,pictureUrl:"//images.ctfassets.net/vnxry7jc7f2k/5xCHQPSxGNOXJySs9OwoV2/731a76191ee437168bb0bc41b7a89ddc/04_SUPERFLUID_200513_0003_pop_peach-_5-4_copy.png?w=300&q=80"}]),2000)
        })
        promise.then(products =>{
            setProductos(products)
        })
        return () => {
            setProductos("")
        }
    }, [])
  

    return (
        <main>
            <h2 className="title-item-container">{titulo}</h2>          
            <ItemList productos = {productos} />           
        </main>
    )
}

export default ItemListContainer