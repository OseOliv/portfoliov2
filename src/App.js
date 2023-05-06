import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import './GlobalStyle.css'
import Main from './pages/Main'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'
import Footer from "./components/Footer/Footer";

function App() {
  return (<>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/sobre" element={<Sobre />}/>
        <Route path="/projetos" element={<Projetos />}/>
        <Route path="/contato" element={<Contato />}/>
      </Routes>
      <Footer />
    </Router>
    
    
    </>
  );
}

export default App;
