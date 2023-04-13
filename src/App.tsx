import { useState } from 'react'
import Navbar from './components/estaticos/navbar/Navbar'
import Home from './paginas/home/Home'
import Footer from './components/estaticos/footer/Footer'
import { Grid } from "@material-ui/core"
import './App.css'

function App() {

  return (
    <>
      <Navbar />
        <Home />
      <Footer />

    </>
  )
}

export default App
