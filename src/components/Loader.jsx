import { loader } from "../assets";

const Loader = ({ text }) => (
  <div className="z-10 bg-black/80 absolute lg:bg-transparent lg:static inset-0 flex flex-col items-center justify-center">
    <img className="object-contain w-[180px]" src={loader} alt="loader" />
    <p className="text-lg font-semibold text-white">{text || "Loading..."}</p>
  </div>
);

export default Loader;
