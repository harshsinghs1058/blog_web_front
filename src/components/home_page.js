import axios from "axios";
import React, { useEffect, useState } from "react";
import Categories from "./my_components/category_side_bar";
import BlogCard from "./my_components/blog_card";
import NavBar from "./my_components/nav_bar";
import loading_gif from "./../assets/loading_gif.gif";
export default function HomePage() {
  console.log(process.env.REACT_APP_URL);
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  useEffect(() => {
    let mounted = true;
    getBlogs().then((items) => {
      if (mounted) {
        setBlogs(items);
      }
    });
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getBlogs = async () => {
    const res = await axios.get(process.env.REACT_APP_URL + `blog/AllBlogs`);
    return res.data;
  };

  return (
    <div className='bg-baby_blue_eyes block h-full min-h-screen'>
      <NavBar />
      <div>
        {blogs.length && blogs.length > 0 ? (
          <div className='flex'>
            <Blogs />
            <Categories />
          </div>
        ) : (
          <div className='flex items-center justify-center h-80v'>
            <img src={loading_gif} alt='loading' height='200px' width='200px' />
          </div>
        )}
      </div>
    </div>
  );

  function Blogs() {
    return (
      <div className='grid grid-cols-3 w-3/4 '>
        {blogs.map((element) => {
          return <BlogCard element={element} key={element._id} />;
        })}
      </div>
    );
  }
}
