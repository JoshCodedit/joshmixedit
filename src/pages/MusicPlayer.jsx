import AudioPlayer from 'react-h5-audio-player';
import'react-h5-audio-player/lib/styles.css';
import track from '../assets/tracks/Cold Machines.wav'
import coverArt from '../assets/images/misc/Lucid_Origin_rainy_dystopian_scifi_city_at_night_inspired_by_C_3.jpg'

const currentTrack = {
    audio : track,
    cover : coverArt,
    title : 'Cold Machines',
    artist :  'Joshua Dixon'
};

export function MusicPlayer() {
  return (
    <div className="album-player">
        <img className='cover' src={currentTrack.cover}/>

        <div>
            <h2>{currentTrack.title}</h2>
            <p>{currentTrack.artist}</p>
        </div>

        <AudioPlayer
            autoPlay={true}
            src={currentTrack.audio}
            showSkipControls={true}
            showJumpControls={false}
            customVolumeControls={[]}
            customAdditionalControls={[]}
        />
    </div>
  );
}

export default MusicPlayer;