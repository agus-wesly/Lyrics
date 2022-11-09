import { useSelector } from "react-redux";
import { Ketololan, MusicSong, TopPlay } from "./components";
import { Ketololan, MusicSong, TopPlay } from "./components";
import { Ketololan, MusicSong, TopPlay } from "./components";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const { useGetCryptoCurrency } = useSelector((state) => state.crypto);

  return (
    <div className="flex">
      <Sidebar />
      {/* <Fotograph /> */}
      {/* <Typrography /> */}

      {/* <div className="flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />
        <div className="flex flex-col bg-gradient-to-br from-black to-[#121286]">
          <h1>This is a heading </h1>
        </div>
        Main section
        <p>Hay ssysyshadhfkah slay cuyyyyy</p>
        <div className="px-6 overflow-y-scroll h-[calc(100vh-72px)] flex xl:flex-row hide-scrollbar flex-col-reverse">
          <div className="xl:sticky relative-1 top-0 h-fit mt-10 md:mt-0">
            <TopPlay />
          </div>
          <div className="flex flex-row items-center sm:p-3 text-sm text-base font-extrabold"></div>
        </div>
      </div> */}
    </div>
  );
};
export default App;