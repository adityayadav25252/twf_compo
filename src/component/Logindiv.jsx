import React from "react";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import SVGComponent from "./svgviewer-react-output";
// import {logo} from "./sea.svg"

function Logindiv() {
  return (
    <div className="border border-sky-500 w-[550px]  ">
      <div className="px-14 text-[#2573FF] ">
        <div className="flex justify-center align-center">
          <h1 className="text-xl mb-10  mt-12 font-semibold ">
            Welcome TWKSAA WELFARE FOUNDATION !
          </h1>
        </div>
        <div className="">
          <label className="text-black ">Email</label>
          <br></br>
          <input
            className="border border-[#2573FF] py-2 px-3 rounded-xl w-full mt-2 mb-4"
            placeholder="Enter your email"
          ></input>
          <label className="text-black mb-5">Password</label>
          <br></br>
          <input
            className="border border-[#2573FF] py-2 px-3 rounded-xl mt-2 w-full  "
            placeholder="Enter your Password"
          ></input>
          <div className="flex justify-end mb-10">
            <a className="text-sm mt-2 " href="#">
              Froget Password ?
            </a>
          </div>
          <button className="bg-[#2573ff] w-full py-3 rounded-xl  text-white">
            Login
          </button>
          <div className="flex justify-center mb-4">
            <h1 className="mt-4 text-gray-400 text-sm">Or</h1>
          </div>

          <div className="flex gap-6">
            <button className="bg-[#c9dcff]  flex items-center justify-center gap-1 w-full py-3 rounded-xl h-12 mb-3 text-[#2573FF]">
              <FaGoogle className="text-base" />Login with Google
            </button>
            <button className="bg-[#c9dcff] flex items-center justify-center gap-1 w-full p-2 rounded-xl h-12  text-[#2573FF] ">
              <FaApple className="text-base" /> Login with Apple
            </button>
          </div>

          <div className="flex justify-center gap-3 text-center mt-16">
            <h1 className="text-xs">Don't have a registration yet ? </h1>
            <a className="font-bold text-xs" href="#">
              
              Register here
            </a>
          </div>
        </div>
      </div>
          <SVGComponent width="60" height="60" className='ml-4 mb-2'  />
    </div>
  );
}

export default Logindiv;
