import React from "react"
import {BiUser} from "react-icons/bi"
import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"
import {useAuth} from "../context/AuthContext"
import { Dropdown } from 'react-bootstrap';
import {useCartContext} from "../context/CartContext"

function NavBar (){  
    const {currentUser,logout} = useAuth();
    const {clear} = useCartContext();

    function primerLetra () {
       return currentUser.email.charAt(0).toUpperCase()
    }

    function salir (){
        logout().then(()=>{
            alert("Volvé pronto :)")
        })
        .catch((e)=>alert(e))
    }

    return (
        <nav>
            <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
                <h1 className="marca">SUPERFLUID</h1>
            </Link>
            <div className="categorias">
                <Link to="/categoria/lips"><span>LIPS</span></Link>
                <Link to="/categoria/eyes"><span>EYES</span></Link>
                <Link to="/categoria/face"><span>FACE</span></Link>
            </div>
            <div>
                <CartWidget/>
                {currentUser ? 

                <Dropdown className="icon">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <span className="icon user">
                        {primerLetra()}
                    </span>
                </Dropdown.Toggle>              
                <Dropdown.Menu>
                   <p className="email-dropdown-item">{currentUser.email} </p>                           
                    <Dropdown.Item href="/miPerfil">Mi Perfil</Dropdown.Item>
                    <p className="dropdown-item "onClick={()=>{
                        salir()
                    }}>Cerrar sesión</p>
                </Dropdown.Menu>
              </Dropdown>
                   
                : <Link to="/login" style={{color:"inherit"}}>
                    <span className="icon">
                       <BiUser/>
                    </span>
                </Link>}               
            </div>
        </nav>
    )
}

export default NavBar