import React from "react";
import { useNavigate } from "react-router";
import { AiFillWarning } from "react-icons/ai";
export default function NotAuth() {
  const navigate = useNavigate();
  return (
    <div className='h-80v flex flex-col items-center justify-center'>
      <AiFillWarning className='text-red-600 text-9xl' />
      <div className='text-4xl font-bold mt - 8'>
        Please Log In To Access this page
      </div>
      <button
        className='text-black border-light_pink border-4 rounded-2xl text-2xl w-52 h-12 font-bold  bg-celeste hover:bg-light_pink hover:border-black hover:border-2 hover:text-black transform duration-300 hover:scale-110 mt-8'
        onClick={() => navigate("/signIn")}
      >
        Sign In
      </button>
    </div>
  );
}
