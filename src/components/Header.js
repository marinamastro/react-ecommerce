import React, {useState} from "react"
import Newsletter from "./Newsletter"
import Promo from "./Promo"
import "../css/header.css"

function Header() {   
    const [close,setCloseNewsletter] = useState(false)
 
    return (
        <header >           
            <Promo />
           {!close && <Newsletter close = {setCloseNewsletter}/>}
        </header>
    )
}

export default Header