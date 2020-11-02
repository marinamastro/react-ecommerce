import React, {useState} from "react"
import NavBar from "./NavBar"
import Newsletter from "./Newsletter"
import Promo from "./Promo"

function Header() {   
    const [close,setCloseNewsletter] = useState(false)
 
    return (
        <header>
            <NavBar/>
            <Promo />
           {!close && <Newsletter close = {setCloseNewsletter}/>}
        </header>
    )
}

export default Header