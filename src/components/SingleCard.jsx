import PlayPause from "./PlayPause";
import { Link } from "react-router-dom";

const SingleCard = ({ music, i, isPlaying, activeSong, handlePlayTop, artistImg, songTitle, albumName, handlePause }) => {
  return (
    <div className="flex flex-row hover:bg-black w-full rounded-lg cursor-pointer animate-slideup">
      <div className="flex text-white flex-row items-center justify-between gap-1 min-w-full ">
        <p className="text-sm">{i + 1}.</p>
        <div className="flex flex-row flex-1 w-[90%] items-center mr-3">
          <img src={music ? music?.images?.coverart : artistImg} alt="cover" className="w-16 h-16 object-contain rounded-md mr-3" />
          <div className={`flex flex-col ${music ? "max-w-[120px]" : "max-w-full"} xl:max-w-[200px] flex-1`}>
            {music ? (
              <Link to={`/songs/${music?.key}`} className="text-md font-semibold truncate">
                {music?.title}
              </Link>
            ) : (
              <p className="text-md font-semibold">{songTitle}</p>
            )}
            {music?.artists !== undefined && music ? (
              <Link to={`/artists/${music?.artists[0].adamid}`} className="text-sm text-slate-300 truncate">
                {music?.subtitle}
              </Link>
            ) : null}
            {artistImg && <p className="text-sm text-slate-300 truncate">{albumName}</p>}
          </div>
        </div>

        {/* Music Only */}
        {music && (
          <div className="pr-5 color-white">
            <PlayPause isPlaying={isPlaying} song={music} activeSong={activeSong} handlePlay={handlePlayTop} handlePause={handlePause} i={i} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleCard;
