import BackgroundVideo from '../components/BackgroundVideo';
import headerMp4 from '../assets/videos/siteHeader0001-1187.mp4';
import LogoComponent from '../components/LogoComponent';
import { HiSpeakerWave } from 'react-icons/hi2';

export default function HomePage() {
  return (
    <div className="relative min-h-[70vh]">
      <BackgroundVideo videoSrc={headerMp4} />
      <div className="absolute inset-0 z-10 flex items-center justify-center flex-col">
        <LogoComponent />
        <p className="text-center text-white text-2xl font-bold tracking-wider">
          MIX AND MASTER SERVICES
        </p>
        <button className="bg-crimson text-white px-4 py-2 my-3 rounded-md hover:scale-105 hover:shadow-lg transform transition-all duration-200">
          REQUEST A MIX & MASTER
        </button>
        <button className="bg-white text-crimson px-5 py-2 rounded-md flex items-center gap-2 hover:scale-105 hover:shadow-lg transform transition-all duration-200">
          <HiSpeakerWave className="text-xl" /> LISTEN TO EXAMPLES
        </button>
      </div>
    </div>
  );
}
