const DetailsHeader = ({ songData, artistId, artistData }) => {
  const artist = artistData?.artists?.[artistId]?.attributes;
  return (
    <div className="relative flex w-full items-center ">
      <div className="rounded-md bg-gradient-to-l from-transparent to-black w-full h-24 xl:h-40" />
      <div className="absolute space-x-3 inset-0 flex flex-row items-center">
        <img src={artistId ? artist?.artwork?.url : songData?.images?.coverart} alt="coverart" className="w-20 xl:w-32 h-20 xl:h-32 object-cover rounded-full" />
        <div className="flex flex-col space-y-1">
          {!artistId ? (
            <>
              <p className="sm:text-2xl text-xl font-bold text-white">{songData?.title}</p>
              <p className="text-slate-300 text-sm">{songData?.subtitle}</p>
            </>
          ) : (
            <p className="sm:text-2xl text-xl text-white font-bold ">{artist?.name}</p>
          )}
          <p className="text-slate-300 text-sm">{artistId ? artist?.genreNames[0] : songData?.genres?.primary}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
