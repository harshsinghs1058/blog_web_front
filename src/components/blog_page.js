import React, { useEffect, useState } from "react";
import NavBar from "./my_components/nav_bar";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function BlogPage() {
  const { blogID } = useParams();
  const [blogData, setBlogData] = useState({});
  const [bloggerData, setBloggerData] = useState({});
  useEffect(() => {
    let mounted = true;
    getBlog().then((blog) => {
      if (mounted) {
        setBlogData(blog.data.blogData);
        setBloggerData(blog.data.bloggerData);
      }
    });
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBlog = async () => {
    const res = await axios.get(process.env.REACT_APP_URL + "blog/blogID", {
      params: {
        blogID: String(blogID),
      },
    });
    console.log(res);
    return res;
  };

  if (blogData.title) {
    console.log(blogData);
    return (
      <div>
        <NavBar />
        <div>
          <div className='fixed mt-3 w-1/4 flex flex-col items-center px-10 '>
            <img
              src={bloggerData.userImg}
              alt='dp'
              className='h-52 w-52 rounded-full inline mr-3'
            />
            <div className='text-3xl mt-3'>{bloggerData.name}</div>
            <div className='text-l mt-3'>{bloggerData.userDesc}</div>
            <textarea
              placeholder='Comment'
              className='w-full border-2 rounded-xl border-black text-l h-15v mt-3 p-2'
              maxLength={100}
            />
            <button className='bg-baby_blue_eyes mt-5 px-5 text-2xl border-2 border-light_pink rounded-xl font-bold hover:bg-celeste transform duration-300 hover:scale-110'>
              Add Comment
            </button>
          </div>
          {MainBlog()}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
        <div className='flex items-center flex-col font-bold justify-center h-80v text-4xl'>
          Blog Not found
          <div>Please refresh the page</div>
        </div>
      </div>
    );
  }
  function MainBlog() {
    return (
      <div className=' w-1/2 mt-5   mx-auto'>
        <div className='text-6xl font-bold mb-3'>{blogData.title}</div>
        <div className='text-2xl text-gray-700 mb-3'>{blogData.desc}</div>
        <div className='flex items-center mb-3'>
          <div className='font-bold mb-3 mr-1'>{bloggerData.name}</div>
          <div className='font-bold mb-3'>| {blogData.time.slice(0, 10)}</div>
        </div>
        <img src={blogData.imgURL} alt='imp' />
        <div
          className='text-2xl mb-5'
          dangerouslySetInnerHTML={{
            __html: blogData.blogBody,
          }}
        ></div>
      </div>
    );
  }
}
