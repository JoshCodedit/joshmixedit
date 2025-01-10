export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 p-6 w-full">
      <ul className="flex gap-10 justify-end container mx-auto px-20 font-navlinks font-semibold">
        <li>
          <a href="/" className="cursor-pointer">
            HOME
          </a>
        </li>
        <li>
          <a href="/about" className="cursor-pointer">
            ABOUT
          </a>
        </li>
        <li>
          <a href="/services" className="cursor-pointer">
            SERVICES
          </a>
        </li>
        <li>
          <a href="/contact" className="cursor-pointer">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}