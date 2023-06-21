import Navbar from './assets/components/estaticos/navbar/Navbar';
import Footer from './assets/components/estaticos/footer/Footer';
import Login from './paginas/login/Login'
import Home from './paginas/home/Home';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListaPostagem from './assets/components/postagens/listapostagem/ListaPostagem';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
      <Routes> // Antigo Switch
          <Route path="/" element={<Login />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaPostagem/>} />
          <Route path="/posts" element={<CadastroUsuario />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;

