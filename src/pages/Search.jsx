import { SongCard, Loader, Error } from "../components";
import { useGetSongBySearchQuery } from "../redux/services/shazamCore";
import { useParams } from "react-router-dom";
import { useRef, useEffect } from "react";

const Search = () => {
  const { searchTerm } = useParams();
  const { data, isFetching, isError } = useGetSongBySearchQuery(searchTerm);
  const searchRef = useRef();

  useEffect(() => {
    if (!isFetching) searchRef.current.scrollIntoView({ behavior: "smooth" });
  }, [data]);

  if (isFetching) return <Loader text={`Searching for ${searchTerm}`} />;
  if (isError) return <Error />;

  return (
    <div ref={searchRef} className="flex flex-col p-4">
      <div className="flex flex-wrap justify-start xl:justify-center gap-6">
        {data?.tracks?.hits?.map((song, i) => (
          <SongCard key={i} song={song?.track} data={data} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Search;
