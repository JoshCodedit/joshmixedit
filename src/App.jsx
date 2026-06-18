import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import StemPrep from './pages/StemPrep';
import MusicPlayer from './pages/MusicPlayer';

function MainSiteLayout() {
  return (
    <div className="text-midnight">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/MusicPlayer" element={<MusicPlayer />} />
        <Route element={<MainSiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/StemPrep" element={<StemPrep />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
