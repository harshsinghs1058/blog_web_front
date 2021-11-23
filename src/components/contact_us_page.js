import React, { useState } from "react";
import NavBar from "./my_components/nav_bar";

export default function ContactUsPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = () => {
    alert(
      "Your query is successfully submit.We will contact you soon on Email"
    );
    setEmail("");
    setMessage("");
  };

  return (
    <div className=' bg-baby_blue_eyes h-100v'>
      <NavBar />
      <div className='flex mx-auto mt-2 rounded-xl bg-white w-30v dark:bg-gray-900 border-2 border-black'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='mt-8 overflow-hidden'>
            <div className='grid grid-cols-1 '>
              <div className='p-6 mr-2 bg-gray-100 dark:bg-gray-800 '>
                <h1 className='text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight'>
                  Get in touch
                </h1>
                <p className='text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2'>
                  Fill in the form to start a conversation
                </p>
                <div className='flex items-center mt-2 text-gray-600 dark:text-gray-400'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1.5'
                    viewBox='0 0 24 24'
                    className='w-8 h-8 text-gray-500'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1.5'
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  <div className='ml-4 text-md tracking-wide font-semibold w-40'>
                    info@example.org
                  </div>
                </div>
              </div>

              <form
                className='p-6 flex flex-col justify-center'
                onSubmit={handleFormSubmit}
              >
                <div className='flex flex-col mt-2'>
                  <label for='email' className='hidden'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    className='w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'
                    autoFocus
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                  />
                </div>

                <div className='flex flex-col mt-2'>
                  <label for='tel' className='hidden'>
                    Number
                  </label>
                  <textarea
                    type='tel'
                    name='tel'
                    id='tel'
                    placeholder='Message'
                    className='w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none h-48'
                    value={message}
                    onChange={(evt) => setMessage(evt.target.value)}
                  />
                </div>

                <button
                  type='submit'
                  className='w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
