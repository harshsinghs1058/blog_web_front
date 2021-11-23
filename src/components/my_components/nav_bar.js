import React from "react";
import { FaSignOutAlt, FaSearch, FaUserAlt } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { ImBlog } from "react-icons/im";
import { AiFillSetting } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/authContext";
export default function NavBar() {
  // eslint-disable-next-line no-unused-vars
  const [auth, userSignIn, userSignOut] = useAuth(useAuth);
  const navigate = useNavigate();
  return (
    <nav className=' h-20 flex items-center justify-between px-10 bg-maximum_blue_purple sticky top-0 z-50'>
      <section
        className='text-black text-4xl font-bold inline cursor-pointer transform transition duration-500 hover:scale-110 '
        onClick={() => navigate("/home")}
      >
        Blog It
      </section>
      <div className='w-2/5 h-12 relative flex items-center'>
        <FaSearch className='ml-4 text-2xl cursor-pointer absolute right-5' />
        <input
          className='h-12 w-full justify-center items-center rounded-xl bg-white border-2 hover:border-black  outline-none text-lg focus:ring inline pl-3 pr-16 focus:border-black'
          placeholder='Search'
        />
      </div>
      <Options />
    </nav>
  );
  function IconButton({ Icon, text, OnClick }) {
    return (
      <div
        className='flex flex-col items-center  cursor-pointer group mx-4 hover:text-black'
        onClick={OnClick}
      >
        <Icon className='group-hover:animate-bounce text-2xl ' />
        <div> {text}</div>
      </div>
    );
  }
  function Options() {
    //TODO:it will be effected by user this.state
    if (auth.userSignedIn) {
      return (
        <section className='text-white text-l flex flex-row '>
          <IconButton
            text={"New Blog"}
            Icon={ImBlog}
            OnClick={() => navigate("/createBlog")}
          />
          <IconButton text={"Settings"} Icon={AiFillSetting} />
          <IconButton
            text={"Profile"}
            Icon={FaUserAlt}
            OnClick={() => navigate("/profile")}
          />
          <IconButton
            text={"Sign Out"}
            Icon={FaSignOutAlt}
            OnClick={() => {
              localStorage.setItem(
                "authBlog",
                JSON.stringify({
                  userSignedIn: false,
                  name: "",
                  email: "",
                  userID: "",
                })
              );
              userSignOut();
              navigate("/home");
            }}
          />
          <button
            className='text-black border-light_pink border-4 rounded-2xl ml-5 px-5 text-2xl w-52 h-12 bg-gray-300 font-bold  bg-lemon_yellow_crayola hover:bg-light_pink hover:border-black hover:border-2 hover:text-black transform duration-300 hover:scale-110'
            onClick={() => navigate("/contactUs")}
          >
            Contact Us
          </button>
        </section>
      );
    } else {
      return (
        <div className='flex'>
          <div>
            <button
              className='text-black border-light_pink border-4 rounded-2xl ml-5 px-10 text-2xl w-52 h-12 font-bold  bg-white hover:bg-light_pink hover:border-black hover:border-2 hover:text-black transform duration-300 hover:scale-110 flex items-center'
              onClick={() => navigate("/signIn")}
            >
              <FiLogIn className='inline mr-2' />
              Sign in
            </button>
          </div>

          <button
            className='text-black border-light_pink border-4 rounded-2xl ml-5 px-10 text-2xl w-52 h-12 font-bold  bg-lemon_yellow_crayola hover:bg-light_pink hover:border-black hover:border-2 hover:text-black transform duration-300 hover:scale-110'
            onClick={() => navigate("/signUp")}
          >
            SignUp
          </button>
        </div>
      );
    }
  }
}
