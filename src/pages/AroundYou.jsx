import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { SongCard } from "../components";
import { Loader } from "../components";
import { useGetSongByCountryQuery } from "../redux/services/shazamCore";

const CountryTracks = () => {
  const [countryId, setCountryId] = useState("");
  const { data, isFetching } = useGetSongByCountryQuery(countryId);
  const IPFY_URL = "https://geo.ipify.org/api/v2/country?apiKey=at_9FePwTZemWocHFeAq7el4pNUg6JaI";
  const aroundYouRef = useRef();

  useEffect(() => {
    const getCountryId = async () => {
      try {
        const resp = await axios.get(IPFY_URL);
        setCountryId(resp?.data?.location?.country);
      } catch (err) {
        console.log(err);
      }
    };
    getCountryId();
  }, []);

  useEffect(() => {
    if (!isFetching) aroundYouRef.current.scrollIntoView({ behavior: "smooth" });
  }, [data]);

  if (isFetching) return <Loader text={"Loading around you..."} />;

  return (
    <div ref={aroundYouRef} className="flex flex-col p-4">
      <div className="w-full flex flex-col justify-center md:justify-between md:flex-row pb-4 items-center ">
        <h1 className="text-2xl text-left text-white font-semibold mb-4 md:mb-0">
          Discover Around You <span className="font-bold text-white text-2xl ">{countryId}</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-start xl:justify-center gap-6 mt-5">
        {data?.map((song, i) => (
          <SongCard key={i} song={song} data={data} i={i} />
        ))}
      </div>
    </div>
  );
};
export default CountryTracks;
