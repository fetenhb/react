
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Crousel from './components/Crousel';
import Apropos from './components/Apropos';
import Contenu from './components/Contenu';
import Footer from './components/Footer';
import Event1 from './components/Event1';


function App() {
  return (
    <div>
   <Navbar />
   <Crousel />
   <Apropos />
   <Contenu />
   <Event1 />
   <Footer />
  
     </div>
   
  );
}

export default App;
