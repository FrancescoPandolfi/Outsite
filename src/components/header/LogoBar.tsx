import {Link} from "react-router-dom";
import Logo from "../navbar/Logo";
import React from "react";

const LogoBar = () => {
  return (
    <div className="flex items-center justify-between">
      <Link to={"/"}>
        <Logo mode={'light'}/>
      </Link>
      <button className="flex items-center text-left bg-white px-3 py-1 rounded-lg border-1 border-gray-200">
        <div className="h-8 w-8">
          <div title="Francesco"
               className="flex items-center justify-center h-full w-full rounded-full bg-outsite-green text-white text-lg uppercase">FP
          </div>
        </div>
        <div className="flex flex-col items-end ml-3"><span
          className="text-sm text-gray-900">Francesco Pandolfi</span></div>
      </button>
    </div>
  );
};

export default LogoBar;
