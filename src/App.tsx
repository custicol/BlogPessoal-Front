import Navbar from './assets/components/estaticos/navbar/Navbar';
import Footer from './assets/components/estaticos/footer/Footer';
import {Grid} from '@material-ui/core';
import './App.css';
import Home from './paginas/home/Home';



function App() {
  return (
   <>
      <Navbar />
      <Home />
      <Footer />
   </>
  );
}

export default App;

