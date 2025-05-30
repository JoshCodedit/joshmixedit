import {
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <div className="bg-flame text-white flex flex-col items-center py-28">
      <div className="flex gap-7 mb-2">
        <a
          href="https://x.com/joshmixedit"
          className="hover:scale-125 hover:shadow-lg transform transition-all duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <FaXTwitter size={30} />
        </a>
        <a
          href="https://instagram.com/joshmixedit_"
          className="hover:scale-125 hover:shadow-lg transform transition-all duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.youtube.com/watch?v=rANpepbbIeM&t=295s"
          className="hover:scale-125 hover:shadow-lg transform transition-all duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube size={30} />
        </a>
        <a
          href="mailto:joshua.dixoncms@gmail.com"
          className="hover:scale-125 hover:shadow-lg transform transition-all duration-200"
          aria-label="Email"
        >
          <FaEnvelope size={30} />
        </a>
      </div>
      <p className="mt-4">
        Website By{' '}
        <a className="font-bold" href="https://www.joshdixon.co.uk">
          Joshua Dixon
        </a>
      </p>
    </div>
  );
}
