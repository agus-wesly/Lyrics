import { Loader } from "../components";
import { Link } from "react-router-dom";
import { useGetWorldChartQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
  const { data, isFetching } = useGetWorldChartQuery();

  if (isFetching) return <Loader text={"Loading top artists"} />;

  return (
    <div className="flex flex-wrap mt-4 items-start gap-5 justify-start w-full px-3">
      {data?.map((artist) => (
        <div className="flex flex-col w-[200px] bg-white/10 rounded-lg backdrop-blur-md text-white text-left px-4 py-2 justify-center items-start group cursor-pointer animate-slideup">
          <div className="relative">
            <Link to={`/artists/${artist?.artists[0].adamid}`}>
              <img src={artist?.images?.coverart} alt="cover" className=" object-contain h-54" />
            </Link>
          </div>
          <div className="flex flex-col max-w-full mt-4">
            <p className="text-sm truncate uppercase">{artist?.artists[0]?.alias}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopArtists;
