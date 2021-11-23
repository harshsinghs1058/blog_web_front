import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React, { useState } from "react";
import NavBar from "./my_components/nav_bar";
import reactDom from "react-dom";
import { useAuth } from "../context/authContext";
import NotAuth from "./my_components/not_auth";
import axios from "axios";
import { useNavigate } from "react-router";

export default function CreateBlogPage() {
  const [auth] = useAuth(useAuth);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [preview, setPreview] = useState(false);
  const [desc, setDesc] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState("Fashion");
  const navigate = useNavigate();
  const handleEditorStateChange = (val) => {
    setEditorState(val);
  };
  const handleAddBlog = async () => {
    setSubmitted(true);
    if (title && desc && imgUrl && editorState.getCurrentContent().hasText()) {
      //on successfully validation
      await axios
        .post(process.env.REACT_APP_URL + "blog/createBlog", {
          title,
          category,
          userID: auth.userID,
          desc,
          blogBody: draftToHtml(convertToRaw(editorState.getCurrentContent())),
          imgURL: imgUrl,
        })
        .then((res) => {
          console.log(res);
          alert("Blog created successfully");
          navigate(`/${res.data.blog._id}/blog`, { replace: true });
        })
        .catch((err) => {
          alert(err);
        });
    }
  };
  return (
    <div>
      <NavBar />
      {auth.userSignedIn ? (
        <div>
          <div className='text-6xl font-bold flex items-center justify-evenly h-40 bg-yellow-400 border-2 border-black'>
            <div>Create New Blog</div>
            <button
              className='bg-baby_blue_eyes mt-5 px-5 text-3xl border-2 border-light_pink rounded-xl font-bold hover:bg-celeste transform duration-300 hover:scale-110 block mb-5 h-24 w-52'
              onClick={() => {
                setSubmitted(true);
                if (
                  title &&
                  desc &&
                  imgUrl &&
                  editorState.getCurrentContent().hasText()
                ) {
                  setPreview(!preview);
                }
              }}
            >
              {preview ? "Back" : "Preview"}
            </button>
            <button
              className='bg-baby_blue_eyes mt-5 px-5 text-3xl border-2 border-light_pink rounded-xl font-bold hover:bg-celeste transform duration-300 hover:scale-110 block mb-5 h-24 w-52'
              onClick={handleAddBlog}
            >
              Add Blog
            </button>
          </div>
          <div className='mx-auto w-1/2'>
            {preview ? BlogPreview() : EditSection()}
          </div>
        </div>
      ) : (
        <NotAuth />
      )}
    </div>
  );

  function EditSection() {
    return (
      <div className='mx-2'>
        <h1 className='ml-5 mt-3 text-xl'>Title</h1>
        <input
          className='border-2 rounded-xl px-3 w-full mt-3 py-2 text-xl hover:border-black  focus:ring'
          placeholder='Blog Title'
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
          autoFocus
        />
        {!title && submitted && (
          <p className='text-red-600 ml-5'>Title is required</p>
        )}
        <h1 className='ml-5 mt-3 text-xl'>Description</h1>
        <textarea
          className='border-2 rounded-xl px-3 w-full mt-3 py-2 text-xl hover:border-black focus:ring'
          value={desc}
          placeholder='Description'
          onChange={(evt) => setDesc(evt.target.value)}
        />
        {!desc && submitted && (
          <p className='text-red-600 ml-5'>Description is required</p>
        )}
        <h1 className='ml-5 mt-3 text-xl'>Image URL</h1>
        <input
          className='border-2 rounded-xl px-3 w-full mt-3 py-2 text-xl hover:border-black focus:ring'
          placeholder='Image URL'
          value={imgUrl}
          onChange={(evt) => setImgUrl(evt.target.value)}
        />
        {!imgUrl && submitted && (
          <p className='text-red-600 ml-5'>imgUrl is required</p>
        )}
        <div className='border-2 rounded-xl px-3 w-full mt-3 py-2 text-xl hover:border-black focus:ring'>
          <div className='flex items-center justify-evenly'>
            <div>Select Category</div>
            <svg
              className='w-2 h-2 absolute top-0 cursor-pointer right-0 m-4 text-gray-400'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 412 232'
            >
              <path
                d='M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z'
                fill='#648299'
                fillRule='nonzero'
              />
            </svg>
            <select
              className='text-gray-400  cursor-pointer '
              value={category}
              onChange={(evt) => setCategory(evt.target.value)}
            >
              <option>Fashion</option>
              <option>Travel</option>
              <option>Entertainment</option>
              <option>Health</option>
              <option>Fitness</option>
              <option>Music</option>
              <option>Financial</option>
              <option>Education</option>
              <option>Cryptocurrency</option>
              <option>Food </option>
            </select>
          </div>
        </div>
        <Editor
          editorClassName='h-80 mt-3 px-3 py-3 '
          wrapperClassName=' border-2 rounded-xl p-3 hover:border-black mb-2 mt-5 '
          placeholder='Start Writing your blog'
          editorState={editorState}
          onEditorStateChange={handleEditorStateChange}
        />
        {!editorState.getCurrentContent().hasText() && submitted && (
          <p className='text-red-600 ml-5 mb-10'>Blog Body is required</p>
        )}
      </div>
    );
  }

  function BlogPreview() {
    return reactDom.createPortal(
      <div className='w-1/2 pt-5 border-2 rounded-xl border-black p-2 absolute left-0 right-0 mx-auto mt-5 mb-10'>
        <div className='text-6xl font-bold mb-5'>{title}</div>
        <div className='text-2xl text-gray-700 mb-5'>{desc}</div>
        <div className='text-2xl font-bold mb-5'>{`${auth.name} | ${new Date()
          .toISOString()
          .slice(0, 10)}`}</div>
        <img src={imgUrl} alt='Invalid Pic' className='w-full min-h-10 mb-5' />
        <div className='text-2xl text-gray-700 mb-5'>#{category}</div>
        <div
          className='text-2xl mb-5'
          dangerouslySetInnerHTML={{
            __html: draftToHtml(convertToRaw(editorState.getCurrentContent())),
          }}
        ></div>
      </div>,
      document.getElementById("model")
    );
  }
}
