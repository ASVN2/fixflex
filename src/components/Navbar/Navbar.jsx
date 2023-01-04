import React from 'react';
import { Sidebar } from '../index';

const Navbar = function () {
  return (
    <nav className="bg-[#e50914] min-h-[50px] py-4 px-3 text-[#f5f5f1] lg:px-10 xl:px-10 ">
      <div className="info flex  justify-between  place-items-center">
        <img className=" w-[120px] hidden md:block lg:block xl:block" src="https://fontmeme.com/permalink/230103/eca293991980827d025dca46743ab8d4.png" alt="" />
        <div className="hidden md:flex lg:flex xl:flex input  flex-row-reverse ease-in duration-300 bg-black rounded-full">
          <span className="block  w-fit p-2 py-4 px-5 rounded-full cursor-pointer active:scale-125 transition-all duration-1000">
            <svg
              onClick={() => {
                if (document.querySelector('.move-input').style.width < '10%') {
                  document.querySelector('.move-input').style.width = '100%';
                  document.querySelector('.move-input').style.paddingLeft = '15px';
                } else {
                  document.querySelector('.move-input').style.paddingLeft = '0px';
                  document.querySelector('.move-input').style.width = '0';
                }
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
          <input type="text" placeholder="Enjoy..." className=" move-input placeholder:text-gray-400 bg-transparent w-[0%]  outline-none text-lg" />
        </div>
        <div className="menu flex  md:hidden lg:hidden xl:hidden cursor-pointer hover:scale-110  transition-all duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        <div className="login flex gap-5 ">
          <div className="theme flex ">
          <svg  
              className="cursor-pointer hover:scale-110  transition-all duration-500 bi bi-sun"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </svg>
          </div>
          <svg
            className="cursor-pointer hover:scale-110  transition-all duration-500 bi bi-person"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


