import React from "react";
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";

const VolumeBar = ({ value, min, max, onChange, setVolume }) => (
  <div className="flex md:flex-row items-center justify-end flex-1 max-w-[180px] relative">
    <div className="absolute inset-0 flex items-center justify-center translate-x-[30%] md:static md:block md:translate-y-0 md:-translate-x-3">
      {value <= 1 && value > 0.5 && <BsFillVolumeUpFill size={25} color="#FFF" onClick={() => setVolume(0)} />}
      {value <= 0.5 && value > 0 && <BsVolumeDownFill size={25} color="#FFF" onClick={() => setVolume(0)} />}
      {value === 0 && <BsFillVolumeMuteFill size={25} color="#FFF" onClick={() => setVolume(1)} />}
    </div>

    <input type="range" step="any" value={value} min={min} max={max} onChange={onChange} className="-rotate-90 w-20 md:-rotate-0 2xl:w-40 lg:w-32 md:w-32 h-1" />
  </div>
);

export default VolumeBar;
