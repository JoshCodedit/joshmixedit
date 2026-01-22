import { FaSpotify, FaApple } from 'react-icons/fa';

export default function MyWorkComponent() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <iframe
        src="https://open.spotify.com/embed/playlist/1nKc6W7tBDOjl76XP8OZ98?utm_source=generator&theme=0"
        width="60%"
        height="422"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-lg shadow-lg "
      ></iframe>
      <h3 className="text-xl mt-6 font-medium">CLICK BELOW TO HEAR MORE</h3>
      <div className="flex gap-6">
        <a
          href="https://open.spotify.com/playlist/1nKc6W7tBDOjl76XP8OZ98?si=6kthXAjMRMOB6GToxc1imA"
          className="flex items-center justify-center gap-2 bg-crimson text-white px-4 py-2 rounded-full w-40 hover:shadow-lg hover:scale-110 transform transition-all duration-200"
        >
          <FaSpotify className="text-2xl" />
          <span>Spotify</span>
        </a>
        <button className="flex items-center justify-center gap-2 bg-crimson text-white px-6 py-3 rounded-full hover:scale-110 transform transition-all duration-200">
          <FaApple className="text-2xl" />
          <span>Apple Music</span>
        </button>
      </div>
    </div>
  );
}
