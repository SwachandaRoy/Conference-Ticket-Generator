import React from "react";
import logoMark from "../assets/images/logo-mark.svg";


const Logo: React.FC = () => {
  return (
    <div className="flex justify-center gap-2 items-center">
      <img src={logoMark} alt="logo" className="w-5 h-5" />
      <h5 className="text-blue-50 font-bold">Coding Conf</h5>
    </div>
  );
};

export default Logo;
