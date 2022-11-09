import { genres } from "../assets/constants";
import { SongCard, Loader } from "../components";
import { useGetSongByGenreQuery } from "../redux/services/shazamCore";
import { useState, useEffect, useRef } from "react";

const Discover = () => {
  const [discoverTitle, setDiscoverTitle] = useState(genres[0].value);
  const { isFetching: loadingSongGenre, data: songByGenre, isError } = useGetSongByGenreQuery(discoverTitle);
  const discoverRef = useRef();

  const handleSelect = (e) => {
    setDiscoverTitle(e.target.value);
  };

  useEffect(() => {
    if (!loadingSongGenre) discoverRef.current.scrollIntoView({ behavior: "smooth" });
  }, [songByGenre]);

  if (loadingSongGenre) return <Loader text={"Loading song"} />;
  if (isError) return "Error...";

  return (
    <div ref={discoverRef} className="flex flex-col p-4">
      <div className="w-full flex flex-col justify-center md:justify-between md:flex-row pb-4 items-center ">
        <h1 className="text-2xl text-left text-white font-semibold mb-4 md:mb-0">Discover {discoverTitle}</h1>
        <select className="rounded-lg bg-black/80 text-white outline-none p-2" onChange={handleSelect}>
          {genres.map((gen, i) => (
            <option key={i} value={gen.value} selected={discoverTitle === gen.value ? true : false}>
              {gen.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap justify-start xl:justify-center gap-6">
        {songByGenre?.tracks?.hits?.map((song, i) => (
          <SongCard key={i} song={song?.track} data={songByGenre} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
