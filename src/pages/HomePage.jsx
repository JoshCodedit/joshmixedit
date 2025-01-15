import BackgroundVideo from '../components/BackgroundVideo';
import headerMp4 from '../assets/videos/siteHeader0001-1187.mp4';

export default function HomePage() {
  return (
    <div className="relative min-h-[50vh]">
      <BackgroundVideo videoSrc={headerMp4} />
      <div className="relative z-10 flex items-center justify-center">
        <img
          src="path-to-your-image.png"
          alt="Description"
          className="w-auto h-auto" // Adjust size as needed
        />
      </div>
    </div>
  );
}
