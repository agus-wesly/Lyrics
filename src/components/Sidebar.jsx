import { links } from "../assets/constants";
import { logo } from "../assets/index";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

const Sidebar = () => {
  const [activeSideBar, setActiveSideBar] = useState(false);

  const NavLinks = ({ setActiveSideBar }) => {
    return links.map((link, i) => (
      <NavLink to={link.to} key={i} onClick={() => setActiveSideBar && setActiveSideBar(false)} className="flex gap-5 items-center text-sm text-white mb-5" end={() => i === 0 && true}>
        {<link.icon className="w-6 h-6" />}
        <p className="hover:text-cyan-500">{link.name}</p>
      </NavLink>
    ));
  };
  return (
    <>
      <div className="w-[230px] bg-slate-900 hidden md:flex flex-col py-10 px-4 ">
        <img src={logo} alt="logo" className="w-full object-contain h-12" />
        <div className="mt-10">{<NavLinks />}</div>
      </div>

      <div className="text-white absolute top-6 right-3 md:hidden cursor-pointer">
        {activeSideBar ? <RiCloseLine onClick={() => setActiveSideBar(false)} className="w-6 h-6" /> : <RiMenuLine onClick={() => setActiveSideBar(true)} className="w-6 h-6" />}
      </div>

      <div className={` transition-all duration-300 ease-in absolute h-screen w-2/3 top-0 md:hidden bg-gradient-to-tr from-white/10 to-[#483d8b] z-10 backdrop-blur-lg py-10 px-4 ${activeSideBar ? "left-0" : "-left-full"}`}>
        <img src={logo} alt="logo" className="w-full object-contain h-12" />
        <div className="mt-10">{<NavLinks setActiveSideBar={setActiveSideBar} />}</div>
      </div>
    </>
  );
};
export default Sidebar;
