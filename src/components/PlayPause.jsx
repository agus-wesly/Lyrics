import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePlay, handlePause, i }) => {
  return isPlaying && activeSong === song ? <FaPauseCircle onClick={handlePause} size={32} /> : <FaPlayCircle size={32} onClick={() => handlePlay(song, i)} />;
};

export default PlayPause;
