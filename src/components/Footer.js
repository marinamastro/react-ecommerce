import React from "react"
import InputNewsletter from "./InputNewsletter"
import Promo from "./Promo"
import IconosDetail from "./IconosDetail"

function Footer () {
    return (
        <>
        <footer>
            <div className="container-sup">
            <div className="footer-newsletter">
                <h3>INSCRIBITE<br/> AL NEWSLETTER</h3>
                <InputNewsletter/>   
                <div style={{position:"relative",width:"60%"}}>
                <Promo style={{fontSize:"0.8rem",background:"yellow",width:"60%",position:"absolute", bottom:"-33px", overflow:"hidden"}}/>
                </div>           
            </div>
            <div className="contacto">
                <div>
                    <b>HELP</b>
                    <p>FAQ</p>
                    <p>Contacto</p>
                    <p>Sigue Tu Pedido</p>
                    <p>Envios</p>
                </div>
                <div>
                    <b>INFORMACION LEGAL</b>
                    <p>Privacy Policy</p>
                    <p>Condiciones De Venta</p>
                    <p>Cookie Policy</p>
                </div>
                <div>
                <b>FOLLOW US</b>
                <p>Instagram</p>
                <p>Facebook</p>
                </div>
            </div>  
            </div>  
            <div className="container-inf">
                <h4>SUPERFLUID</h4>
                <div style={{display:"flex",justifyContent:"center"}}>
                <IconosDetail styles={{display:"flex",justifyContent:"space-between",width:"20%"}}/>
                </div>
               
            </div>       
        </footer>
        </>
    )
}

export default Footer