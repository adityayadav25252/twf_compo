import React from 'react'
import SVGComponentLogin from '../assets/Svglogin';
import { FaApple , FaGoogle } from "react-icons/fa";




function Login() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-8/12 mx-auto rounded-lg shadow-lg p-6">
        <div className="loginright  text-[#2573FF] pl-40 pr-36 pt-5  ">
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

          <button className="bg-[#2573FF] w-full py-3 rounded-xl text-white">
            Login
          </button>
          <div className="flex justify-center my-4">
            <h1 className="text-gray-400 text-sm">Or</h1>
          </div>
          <div className="flex gap-6">
            <button className="bg-[#c9dcff] flex items-center justify-center gap-2 w-full py-3 rounded-xl h-12 text-[#2573FF]">
              <FaGoogle className="text-base" />
              Login with Google
            </button>
            <button className="bg-[#c9dcff] flex items-center justify-center gap-2 w-full py-3 rounded-xl h-12 text-[#2573FF]">
              <FaApple className="text-base" />
              Login with Apple
            </button>
          </div>
          <div className="flex justify-center gap-3 text-center mt-16">
            <h1 className="text-xs">Don't have a registration yet?</h1>
            <a className="font-bold text-xs text-[#2573FF]" href="#">
              Register here
            </a>
          </div>
          <SVGComponentLogin width="60" height="60" className="ml-4 mb-2" />
        </div>
      </div>
      <div className="hidden md:block">
        <img
          className="h-screen w-full object-cover"
          src="https://c0.wallpaperflare.com/preview/746/11/741/learning-tablet-education-technology.jpg"
          alt="Login Illustration"
        />
      </div>
    </div>
  )
}

export default Login;