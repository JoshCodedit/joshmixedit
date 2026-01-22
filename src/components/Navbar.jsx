import logoFaders from '../assets/images/logos/faders.png';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      // Already on homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Not on homepage, navigate with state - HomePage will handle scrolling
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav className=" top-0 right-0 p-4 w-full flex items-center z-50">
      <a href="/">
        <img src={logoFaders} alt="logo" className="w-12 h-12 ml-20" />
      </a>{' '}
      <ul className="flex gap-10 text-lg justify-end container mx-auto mr-20 font-['Cairo Play']">
        <li>
          <a href="/" className="nav-link">
            HOME
          </a>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('about-section')}
            className="nav-link bg-transparent border-none"
          >
            ABOUT
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('services-section')}
            className="nav-link bg-transparent border-none"
          >
            SERVICES
          </button>
        </li>
        <li>
          <a href="/contact" className="nav-link">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}
