import React, { useState, useContext } from "react";
import reactDom from "react-dom";
import Spinner from "react-spinkit";
const LoadingContext = React.createContext(undefined);
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  // taking last credentials from local storage

  const changeIsLoading = (hello) => {
    setIsLoading(hello);
  };
  const data = [changeIsLoading];
  return (
    <LoadingContext.Provider value={data}>
      {isLoading ? <Loading /> : children}
    </LoadingContext.Provider>
  );
};

const Loading = () => {
  return reactDom.createPortal(
    <div className='fixed inset-0 content-end top-0 flex items-center w-100v justify-center bg-white bg-opacity-70 h-100v pointer-events-none'>
      <Spinner name='pacman' fadeIn='none' className='text-black bg-black' />
    </div>,
    document.getElementById("model")
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading can only be used inside LoadingProvider");
  }
  return context;
};
