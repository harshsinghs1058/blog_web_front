import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Categories from "./my_components/category_side_bar";
import NavBar from "./my_components/nav_bar";

export default function CategoryPage() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    let mounted = true;
    getBlogs().then((items) => {
      if (mounted) {
        setBlogs(items);
      }
    });
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  const getBlogs = async () => {
    const res = await axios.get(process.env.REACT_APP_URL + "blog/category", {
      params: {
        category,
      },
    });
    return res.data;
  };

  return (
    <div className='bg-baby_blue_eyes h-100v'>
      <NavBar />
      <div className='flex'>
        {Blogs()}
        <div>
          <Categories />
        </div>
      </div>
    </div>
  );

  function Blogs() {
    return (
      <div className='grid grid-cols-3 w-3/4 '>
        {blogs.length > 0 ? (
          blogs.map((element) => {
            return BlogCard(element);
          })
        ) : (
          <div className='text-6xl font-bold flex items-center h-80v justify-center w-100v'>
            No Blog Found
          </div>
        )}
      </div>
    );
  }

  function BlogCard(element) {
    return (
      <div
        className='m-5 h-96 rounded-lg overflow-hidden shadow-lg inline transform bg-mauve hover:scale-110'
        onClick={() => {
          navigate(`/${element._id}/blog`);
        }}
        key={element._id}
      >
        <img
          className='w-full h-44 object-cover'
          src={element.imgURL}
          alt='Sunset in the mountains'
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>
            {String(element.title).substring(0, 22) + "..."}
          </div>
          <p className='text-gray-700 text-base'>
            {String(element.desc).substring(0, 100)}
          </p>
        </div>
        <div className='px-6 pt-4 pb-2 '>
          <span className='inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #{element.category}
          </span>
        </div>
      </div>
    );
  }
}
