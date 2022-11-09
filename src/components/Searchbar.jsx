import { useState, useEffect } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${search}`);
    }
  };

  return (
    <div className="p-6 w-full flex flex-row items-center">
      <RiSearch2Line className="w-6 h-6 text-white mr-3" />
      <input type="text" value={search} onChange={handleSearch} onKeyPress={handleKeyPress} placeholder="Search A song" className="bg-transparent px-2 py-1 text-white w-[50%] placeholder:text-gray-300 outline-none border:none" />
    </div>
  );
};

export default Searchbar;
