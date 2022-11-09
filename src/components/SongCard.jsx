import PlayPause from "./PlayPause";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../redux/features/playerSlice";

const SongCard = ({ song, data, i }) => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const handlePause = () => {
    dispatch(playPause(false));
  };

  const handlePlay = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[200px] bg-white/10 rounded-lg backdrop-blur-md text-white text-left px-4 py-2 justify-center items-start group cursor-pointer animate-slideup">
      <div className="relative">
        <div className={`absolute inset-0 bg-black/40 justify-center items-center group-hover:flex ${activeSong?.title === song?.title ? "flex" : "hidden"}`}>
          <PlayPause handlePlay={handlePlay} handlePause={handlePause} isPlaying={isPlaying} activeSong={activeSong} song={song} />
        </div>
        <img src={song?.images?.coverart} alt="cover" className=" object-contain h-54" />
      </div>
      <div className="flex flex-col max-w-full mt-4">
        <h3 className="text-md truncate">{song?.title}</h3>
        <p className="text-sm truncate">{song?.subtitle}</p>
      </div>
    </div>
  );
};

export default SongCard;
