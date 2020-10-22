import React from 'react'
import './App.css'
import Header from "./components/Header"
import AnimacionIntro from "./components/AnimacionIntro"
import ItemListContainer from "./components/ItemListContainer"


function App() {
  return (
    <>
    <AnimacionIntro/>
     <Header/>
     <ItemListContainer titulo="TUS NUEVOS BÁSICOS!"/>    
     </>
    
  );
}

export default App;
