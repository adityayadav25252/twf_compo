import React from 'react'
import { FaApple, FaGoogle } from "react-icons/fa";

function LoginAllButton() {
  return (
    <div>
      <div>
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
        </div>
    </div>
  )
}

export default LoginAllButton