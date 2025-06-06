import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import StemPrep from './pages/StemPrep';

function App() {
  return (
    <Router>
      <div className="text-midnight">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/StemPrep" element={<StemPrep />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
