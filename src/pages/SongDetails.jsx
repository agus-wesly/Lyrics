import { useParams } from "react-router-dom";
import { useGetSongDetailQuery, useGetRecommendSongQuery } from "../redux/services/shazamCore";
import { Loader } from "../components";
import { DetailsHeader } from "../components";
import { SingleCard } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../redux/features/playerSlice";

const SongDetails = () => {
  const { songid } = useParams();
  const { data: songData, isFetching } = useGetSongDetailQuery(songid);
  const { data: recommendSong, isFetching: isFetchingRecommend } = useGetRecommendSongQuery(songid);
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const handlePlayTop = (song, i) => {
    dispatch(setActiveSong({ song, data: recommendSong, i }));
    dispatch(playPause(true));
  };

  const handlePause = () => {
    dispatch(playPause(false));
  };

  if (isFetching || isFetchingRecommend) return <Loader text={"Loading Song Detail..."} />;

  const filteredData = recommendSong.filter((song) => song.images !== undefined);

  return (
    <div className="flex flex-col">
      <DetailsHeader songData={songData} artisId="" />
      <div className="flex flex-col my-5">
        <h1 className="text-white text-lg font-bold mb-2">Lyrics : </h1>
        {songData?.sections[1]?.type === "LYRICS" ? (
          songData.sections[1].text?.map((text, i) => (
            <p key={i} className="text-sm text-slate-200">
              {text}
            </p>
          ))
        ) : (
          <p className="text-sm text-slate-200">No lyrics found</p>
        )}
      </div>
      <div className="flex flex-col items-start">
        <div className="w-full ">
          <h1 className="text-white text-2xl md:text-xl font-semibold">Related Songs : </h1>
        </div>
        <div className="flex flex-col w-[100%] gap-8 mt-2 items-center">
          {filteredData?.map((sdata, i) => (
            <SingleCard key={sdata?.key} music={sdata} i={i} isPlaying={isPlaying} activeSong={activeSong} handlePause={handlePause} handlePlayTop={handlePlayTop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
