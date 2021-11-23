import React, { useState } from "react";
import "./sign_up.css";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useAuth } from "../../context/authContext";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email.trim()
    )
  ) {
    errors.email = "Invalid email";
  }
  if (values.password.length < 8) {
    errors.password = "Min length should be 8";
  }
  if (values.confirmPassword.length < 8) {
    errors.confirmPassword = "Min length should be 8";
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password mismatch";
  }
  return errors;
};

//default return func
export default function SignUp(props) {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [auth, userSignIn] = useAuth(useAuth);

  const formik = useFormik({
    initialValues,
    validate,
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (
      !(
        formik.errors.name ||
        formik.errors.email ||
        formik.errors.password ||
        formik.errors.confirmPassword
      )
    ) {
      //if all field are validated send request to backend
      try {
        await axios
          .post(process.env.REACT_APP_URL + "user/signUp", {
            email: formik.values.email.trim(),
            name: formik.values.name.trim(),
            password: formik.values.password,
          })
          .then(async (res) => {
            if (res.status === 201) {
              //on successfully sign up
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
            } else alert(res.data);
          });
      } catch (err) {
        if (err.response) alert(err.response.data.message);
        else alert(err.response.data);
      }
    }
  };

  //jsx
  return (
    <div id='sign_up_page'>
      <div id='left'>
        <Link to='/'>BlogSite</Link>
      </div>
      <form id='form' onSubmit={handleFormSubmit}>
        <div id='welcome'>Create Account</div>
        <div>
          <div className='flex items-center'>
            <FiUser fontSize='20px' />
            <input
              type='text'
              placeholder='Enter Name'
              name='name'
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              autoFocus
              className='border-2 border-b-2 focus:border-2'
            />
          </div>
          {formik.touched.name && formik.errors.name && (
            <div className='error'>{formik.errors.name}</div>
          )}
        </div>

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
              className='border-2 border-b-2 focus:border-2'
            />
          </div>
          {(formSubmitted || formik.touched.password) &&
            formik.errors.password && (
              <div className='error'>{formik.errors.password}</div>
            )}
        </div>
        <div>
          {" "}
          <div className='flex items-center'>
            <FiLock fontSize='20px' />
            <input
              type='password'
              placeholder='Confirm Password'
              formNoValidate
              name='confirmPassword'
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              className='border-2 border-b-2 focus:border-2'
            />
          </div>
          {(formSubmitted || formik.touched.confirmPassword) &&
            formik.errors.confirmPassword && (
              <div className='error'>{formik.errors.confirmPassword}</div>
            )}
        </div>
        <button id='btn_sign_up'>Continue</button>
        <span>
          Already Member?<Link to='/signIn'>Login</Link>
        </span>
      </form>
    </div>
  );
}
