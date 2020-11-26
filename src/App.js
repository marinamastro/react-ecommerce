import React from 'react'
import './css/App.css'
import "./css/Header.css"
import "./css/Item.css"
import "./css/ItemCount.css"
import "./css/Navbar.css"
import "./css/Footer.css"
import "./css/ItemCart.css"
import "./css/Categoria.css"
import "./css/Auth.css"
import "./css/CompraExitosa.css"
import "./css/MiPerfil.css"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import CartProvider from "./context/CartContext"
import {AuthProvider} from "./context/AuthContext"
import Categoria from "./components/Categoria"
import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn"
import ForgotPassword from "./components/ForgotPassword"
import CompraExitosa from "./components/CompraExitosa"
import MiPerfil from "./components/MiPerfil"



function App() {
  return (
  <AuthProvider>
    <CartProvider>
      <BrowserRouter>    
        <NavBar/>    
        <Switch>
          <Route exact path="/">        
            <Header/>
            <ItemListContainer titulo="TUS NUEVOS BÁSICOS!"/> 
            <Footer/>
          </Route>      
          <Route path="/items/:id">
            <ItemDetailContainer/>        
          </Route>
          <Route path="/cart">
            <Cart/>        
          </Route>
          <Route path="/categoria/:categoryId" >
            <Categoria/>        
          </Route>
          <Route path="/signup" >
            <SignUp/>        
          </Route>
          <Route path="/login" >
            <LogIn/>        
          </Route>
          <Route path="/forgotpassword" >
            <ForgotPassword/>        
          </Route>
          <Route path="/compraexitosa/:id" >
            <CompraExitosa/>        
          </Route> 
          <Route path="/miPerfil" >
            <MiPerfil/>        
          </Route>             
        </Switch>        
      </BrowserRouter>    
    </CartProvider>
  </AuthProvider>
  );
}

export default App;
