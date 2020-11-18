import React from 'react'
import './css/App.css'
import "./css/Header.css"
import "./css/Item.css"
import "./css/ItemCount.css"
import "./css/Navbar.css"
import "./css/Footer.css"
import "./css/ItemCart.css"
import "./css/Categoria.css"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import CartProvider from "./context/CartContext"
import Categoria from "./components/Categoria"


function App() {
  return (
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
        <Route exact path="/categoria/:categoryId" >
          <Categoria/>        
        </Route>
      </Switch>        
    </BrowserRouter>    
  </CartProvider>
  );
}

export default App;
