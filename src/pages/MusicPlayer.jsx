import AudioPlayer from 'react-h5-audio-player';
import { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import 'react-h5-audio-player/lib/styles.css';
import '../MusicPlayer.css';
import tracks from '../json/tracks.json';
import TrackInfoModal from '../modals/TrackInfoModal';


export function MusicPlayer() {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quality, setQuality] = useState("standard");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const currentTrack = tracks[currentIndex];
  const currentSrc = quality === "high" ? currentTrack.highSrc : currentTrack.standardSrc;

  const getAudio = () => playerRef.current?.audio.current;

  const togglePlayback = async () => {
    const audio = getAudio();
    if (!audio) return;


    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const playTrack = (index) => {
    setCurrentIndex(index);
    setIsPlaying(true);

    setTimeout(() => {
      getAudio()?.play();
    }, 0);
  };

  const playNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);

    setTimeout(() => {
      getAudio()?.play();
    }, 0);
  };

  const playPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? tracks.length - 1 : prev - 1
    );
    setIsPlaying(true);

    setTimeout(() => {
      getAudio()?.play();
    }, 0);
  };

  const handlePause = () => {
    if (!isSeeking) {
      setIsPlaying(false);
    }
  };

  const handleSeeking = () => {
    setIsSeeking(true);
  };

  const handleSeeked = async () => {
    setIsSeeking(false);

    if (isPlaying) {
      try {
        await getAudio()?.play();
      } catch (error) {
        console.warn('Playback could not resume after seeking:', error);
      }
    }
  };

  return (
    <div className="album-player">
      <img className="cover" src={currentTrack.cover} alt={currentTrack.album} />

      <div className="now-playing">
        <div>
          <h1>{currentTrack.album}</h1>
          <h2>{currentTrack.artist}</h2>
          <p>Album • 2026</p>
        </div>
        <button className="play-button" onClick={togglePlayback}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>

      <div id="track-list" className='trackList'>
        <ul>
          {tracks.map((track, index) => (
            <li
              key={track.id}
              className={index === currentIndex ? "playing-track" : "track"}
              onClick={() => playTrack(index)}
            >
              <div className="track-info">
                <div className="track-title-row">
                  <p className={index === currentIndex ? "playing-track" : "track"}>{track.title}</p>

                  <button
                    className="track-menu-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTrack(track);
                      setIsModalOpen(true);
                    }}
                  >
                    ⋮
                  </button>
                </div>

                <span>{track.duration}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <AudioPlayer
        ref={playerRef}
        autoPlay={false}
        src={currentSrc}
        onPlay={() => setIsPlaying(true)}
        onPause={handlePause}
        onSeeking={handleSeeking}
        onSeeked={handleSeeked}
        onEnded={playNext}
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={playNext}
        onClickPrevious={playPrevious}
        customVolumeControls={[]}
        customAdditionalControls={[]}
      />

      <TrackInfoModal
        data={selectedTrack}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTrack(null);
        }}
      />
    </div>
  );
}

export default MusicPlayer;