import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar'
import Home from './paginas/home/Home'
import Footer from './components/estaticos/footer/Footer'
import './App.css'
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadatroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroTema from './components/temas/cadsatroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import store from './store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function App() {

  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch

            <Route path="/" element={<Login />} />


            <Route path="/login" element={<Login />} />

            <Route path="/home" element={<Home />} />

            <Route path="/cadastrousuario" element={<CadastroUsuario />} />

            <Route path="/temas" element={<ListaTema />} />

            <Route path="/posts" element={<ListaPostagem />} />

            <Route path="/formularioPostagem" element={<CadastroPostagem />} />

            <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />

            <Route path="/formularioTema" element={<CadastroTema />} />

            <Route path="/formularioTema/:id" element={<CadastroTema />} />

            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

            <Route path="/deletarTema/:id" element={<DeletarTema />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>

  )
}

export default App
