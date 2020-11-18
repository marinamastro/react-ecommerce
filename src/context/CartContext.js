import React,{useState,useContext} from "react"

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

export default function CartProvider ({children}) {
    const [cart,setCart] = useState([]);

    function addItem(item){         
        let itemFound = cart.find(x=>x.item.id===item.item.id)        
        if(!itemFound){
            setCart([...cart,item])
        }else{
            const itemActualizado = {...itemFound,cantidad:itemFound.cantidad+item.cantidad} 
            let index = cart.findIndex(x=>x.item.id===item.item.id);            
            cart.splice(index,1,itemActualizado)           
            setCart([...cart])           
        }     
    } 

    function removeItem(id){
        setCart([...cart.filter(x=>x.item.id!==id)])        
    }

    function clear(){
        setCart([])
    }

    return <CartContext.Provider value={{cart,addItem,removeItem}}>
    {children}
    </CartContext.Provider>
}