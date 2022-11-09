import { SongCard, Loader } from "../components";
import { useGetWorldChartQuery } from "../redux/services/shazamCore";
import { useEffect, useRef } from "react";

const TopCharts = () => {
  const { isFetching, data, isError } = useGetWorldChartQuery();
  const topChartRef = useRef();

  useEffect(() => {
    if (!isFetching) topChartRef.current.scrollIntoView({ behavior: "smooth" });
  }, [data]);

  if (isFetching) return <Loader text={"Loading song"} />;
  if (isError) return "Error...";

  return (
    <div ref={topChartRef} className="flex flex-col p-4">
      <div className="w-full flex flex-col justify-center md:justify-between md:flex-row pb-4 items-center ">
        <h1 className="text-2xl text-left text-white font-semibold mb-4 md:mb-0">Discover Top Chart</h1>
      </div>
      <div className="flex flex-wrap justify-start xl:justify-center gap-6 mt-5">
        {data?.map((song, i) => (
          <SongCard key={i} song={song} data={data} i={i} />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
