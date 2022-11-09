import { useRef, useEffect } from "react";
import SingleCard from "./SingleCard";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetWorldChartQuery } from "../redux/services/shazamCore";
import { setActiveSong, playPause } from "../redux/features/playerSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";

const TopPlay = () => {
  const { data, isFetching } = useGetWorldChartQuery();
  const topMusic = data?.slice(0, 5);
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const topPlayRef = useRef(null);

  useEffect(() => {
    if (!isFetching) topPlayRef.current.focus();
  }, [data]);

  const handlePlayTop = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  const handlePause = () => {
    dispatch(playPause(false));
  };

  if (isFetching) return ".";

  return (
    <div ref={topPlayRef} className="flex max-w-full xl:max-w-[350px] flex-col items-center mb-4 xl:mb-0 xl:ml-6 ml-0 ">
      <div className="flex flex-col w-full">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-lg font-semibold text-white">Top Charts</h2>
          <Link to="/top-charts" className="text-slate-200 text-sm">
            See more
          </Link>
        </div>
        <div className="flex flex-col mt-4 items-start gap-5 justify-start w-full px-3">
          {topMusic?.map((music, i) => (
            <SingleCard key={music?.key} music={music} i={i} isPlaying={isPlaying} activeSong={activeSong} handlePlayTop={handlePlayTop} handlePause={handlePause} />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col mt-5">
        <div className="w-full flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold text-white">Top Artists</h2>
          <Link to="/top-artists" className="text-slate-200 text-sm">
            See more
          </Link>
        </div>
        <Swiper spaceBetween={15} slidesPerView="auto" modules={[FreeMode]} freeMode centeredSlidesBounds centeredSlides>
          {topMusic?.map((music, i) => (
            <SwiperSlide key={music?.key} style={{ width: "20%", height: "auto" }} className="shadow-lg rounded-full animate-slideright">
              <Link to={`/artists/${music?.artists[0]?.adamid}`}>
                <img src={music?.images?.background} alt="cover" className="rounded-full w-full object-cover" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
