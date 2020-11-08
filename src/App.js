import React from 'react'
import './css/App.css'
import "./css/Header.css"
import "./css/Item.css"
import "./css/ItemCount.css"
import "./css/Navbar.css"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from "./components/Cart"


function App() {
  return (
    <BrowserRouter>    
      <NavBar/>
      <Switch>
        <Route exact path="/">        
          <Header/>
          <ItemListContainer titulo="TUS NUEVOS BÁSICOS!"/> 
        </Route>      
        <Route path="/items/:id">
          <ItemDetailContainer/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
      </Switch>
        
    </BrowserRouter>    
  );
}

export default App;
