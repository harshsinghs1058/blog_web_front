import React, { useState, useEffect } from "react";
import { useAuth } from "./../context/authContext";
import BlogCard from "./my_components/blog_card";
import NavBar from "./my_components/nav_bar";
import NotAuth from "./my_components/not_auth";
import axios from "axios";
export default function ProfilePage() {
  const [blogs, setBlogs] = useState([]);
  const [auth] = useAuth(useAuth);

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
    const res = await axios.get(process.env.REACT_APP_URL + `blog/myblogs`, {
      params: {
        userID: auth.userID,
      },
    });
    return res.data;
  };

  function Blogs() {
    return (
      <div className='grid grid-cols-3  '>
        {blogs.length > 0 ? (
          blogs.map((element) => {
            return <BlogCard element={element} />;
          })
        ) : (
          <h1>Loading Blogs</h1>
        )}
      </div>
    );
  }
  if (auth.userSignedIn)
    return (
      <div className='bg-baby_blue_eyes min-h-screen'>
        <NavBar />
        <div className='flex'>
          <div className='ml-10 w-1/4'>
            <img
              src={auth.userImg}
              alt='Profile pic'
              className='bg-white w-full mt-10 rounded-xl border-2 border-black mb-3'
            />
            <div className='text-4xl font-bold mb-2'>{auth.name}</div>
            <div className='text-2xl mb-2'>{auth.userDesc}</div>
          </div>
          <div className='w-full'>
            <div className='text-4xl ml-4 mt-8 font-bold'>My Blogs</div>
            <Blogs />
          </div>
        </div>
      </div>
    );
  else return <NotAuth />;
}
