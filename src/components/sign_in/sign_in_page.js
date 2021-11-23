import React, { useState } from "react";
import "./sign_in.css";
import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useAuth } from "../../context/authContext";

const initialValues = {
  email: "",
  password: "",
};

const validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email
    )
  ) {
    errors.email = "Invalid email";
  }
  if (values.password.length < 8) {
    errors.password = "Min length should be 8";
  }
  return errors;
};

export default function SignIn() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [auth, userSignIn] = useAuth(useAuth);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validate,
  });

  //handling form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!(formik.errors.email || formik.errors.password)) {
      //if all field are validated send request to backend
      try {
        await axios
          .post(process.env.REACT_APP_URL + "user/signIn", formik.values)
          .then(async (res) => {
            if (res.status === 202) {
              //on successfully sign in
              userSignIn(
                res.data.user.name,
                res.data.user.email,
                res.data.user._id,
                res.data.user.userDesc,
                res.data.user.userImg
              );
              localStorage.setItem(
                "authBlog",
                JSON.stringify({
                  userSignedIn: true,
                  name: res.data.user.name,
                  email: res.data.user.email,
                  userID: res.data.user._id,
                  userDesc: res.data.user.userDesc,
                  userImg: res.data.user.userImg,
                })
              );
              navigate("/home");
            } else alert("Please Reload some error has occurred");
          });
      } catch (err) {
        if (err.response) alert(err.response.data.message);
        else alert(err);
      }
    }
  };

  //jsx
  return (
    <div id='sign_in_page'>
      <div id='left'>
        <Link to='/'>BlogSite</Link>
      </div>
      <form id='form' onSubmit={handleFormSubmit}>
        <p id='welcome'>Welcome Back</p>
        <div>
          <div className='flex items-center'>
            <FiMail fontSize='20px' />
            <input
              type='text'
              placeholder='Email'
              formNoValidate
              name='email'
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              autoFocus
              className='border-2 border-b-2 focus:border-2'
            />
          </div>
          {(formSubmitted || formik.touched.email) && formik.errors.email && (
            <div className='error'>{formik.errors.email}</div>
          )}
        </div>
        <div>
          <div className='flex items-center'>
            <FiLock fontSize='20px' />
            <input
              type='password'
              placeholder='Enter Password'
              formNoValidate
              name='password'
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              className='border-2  hover:border-b-2  focus:border-2'
            />
          </div>
          {(formSubmitted || formik.touched.password) &&
            formik.errors.password && (
              <div className='error'>{formik.errors.password}</div>
            )}
        </div>
        <span id='forgot'>
          <Link to='/forget-password'>Forgot Password ?</Link>
        </span>
        <button id='btn_sign_in'>Continue </button>
        <span>
          New to blogSite? <Link to='/signUp'>Join now</Link>
        </span>
      </form>
    </div>
  );
}
