import React from "react";
import { useNavigate } from "react-router";
export default function Categories() {
  const navigate = useNavigate();
  return (
    <div className='border-dotted border-2 rounded-2xl fixed w-1/5 right-10 h-80v overflow-hidden bg-baby_powder transform  hover:scale-110 my-10 flex items-center flex-col '>
      <div className='text-4xl font-bold my-3 text-maximum_blue_purple'>
        Categories
      </div>
      {CategoryItems("Fashion")}
      {CategoryItems("Travel")}
      {CategoryItems("Entertainment")}
      {CategoryItems("Health")}
      {CategoryItems("Fitness")}
      {CategoryItems("Music")}
      {CategoryItems("Financial")}
      {CategoryItems("Education")}
      {CategoryItems("Cryptocurrency")}
      {CategoryItems("Food ")}
    </div>
  );

  function CategoryItems(text) {
    return (
      <button
        className='text-black font-bold text-2xl rounded-2xl px-5 my-2 hover:bg-celeste hover:text-3xl hover:border-2 hover:border-black cursor-pointer'
        onClick={() => {
          navigate(`/category/${text}`, { replace: true });
        }}
      >
        {text}
      </button>
    );
  }
}
