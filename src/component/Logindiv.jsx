import React from "react";
import SVGComponent from "./svgviewer-react-output";
import Logintextemail from "./Logintextemail";
import LoginAllButton from "./LoginAllButton";

function Logindiv() {
  return (
    <div className="w-full md:w-8/12 mx-auto rounded-lg shadow-lg p-6">
      <div className="loginright  text-[#2573FF] pl-40 pr-36 pt-5  ">
        <Logintextemail />
        <LoginAllButton />
        <SVGComponent width="60" height="60" className="ml-4 mb-2" />
      </div>
    </div>
  );
}

export default Logindiv;
