import logoFaders from '../assets/images/logos/faders.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 p-6 w-full flex items-center z-50">
      <img src={logoFaders} alt="logo" className="w-12 h-12 ml-20" />
      <ul className="flex gap-10 justify-end container mx-auto mr-20 font-['Cairo Play']">
        <li>
          <a href="/" className="nav-link">
            HOME
          </a>
        </li>
        <li>
          <a href="/about" className="nav-link">
            ABOUT
          </a>
        </li>
        <li>
          <a href="/services" className="nav-link">
            SERVICES
          </a>
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
