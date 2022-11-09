import { useParams } from "react-router-dom";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";
import { Loader, Error } from "../components";
import { DetailsHeader } from "../components";
import { SingleCard } from "../components";

const ArtisDetails = () => {
  const { id: artistId } = useParams();
  const { data, isFetching } = useGetArtistDetailsQuery(artistId);

  if (isFetching) return <Loader text={"Loading Artist Detail..."} />;

  const artistAlbum = Object.values(data?.songs);

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={data} />
      <div className="flex flex-col items-start mt-5">
        <div className="w-full ">
          <h1 className="text-white text-2xl md:text-xl font-semibold">Related Songs : </h1>
        </div>
        <div className="flex flex-col w-[100%] gap-8 mt-2 items-center">
          {artistAlbum?.map((artist, i) => (
            <SingleCard key={i} i={i} artistImg={artist?.attributes?.artwork?.url} songTitle={artist?.attributes?.name} albumName={artist?.attributes?.albumName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtisDetails;
