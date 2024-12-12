import React from "react";

function Logintextemail() {
  return (
    <div>
      <div className="flex justify-center align-center">
        <h1 className="heading text-2xl mb-10 mt-2 font-bold text-center">
          <span className="text-4xl font-medium">WELCOME</span>
          <br /> TWKSAA WELFARE FOUNDATION!
        </h1>
      </div>
      <div>
        <label htmlFor="email" className="text-black">
          Email
        </label>
        <br />
        <input
          id="email"
          className="border border-[#2573FF] py-2 px-3 rounded-xl w-full mt-2 mb-4"
          placeholder="Enter your email"
          type="email"
        />
        <label htmlFor="password" className="text-black">
          Password
        </label>
        <br />
        <input
          id="password"
          className="border border-[#2573FF] py-2 px-3 rounded-xl mt-2 w-full"
          placeholder="Enter your Password"
          type="password"
        />
        <div className="flex justify-end mb-10">
          <a className="text-sm mt-2 text-[#2573FF]" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Logintextemail;
