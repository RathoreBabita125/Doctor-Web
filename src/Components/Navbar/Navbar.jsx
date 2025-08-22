import { useState } from "react";

export default function Navbar() {
  

  return (
    <>
        <div className="w-full bg-[#373636] text-center p-6 relative">        
            <p className="text-gray-200 font-serif ">Register Yourself As An Amrutam Doctor</p>
            <div className="w-[355px] p-4 rounded-[16px] bg-[rgb(58,100,59)] text-center font-serif absolute right-15 top-2 space-x-1.5">
                <i class="fa-solid fa-user-plus text-white"></i> <button className="text-white">Join Now</button>
            </div>
        </div>
    </>
  );
}
