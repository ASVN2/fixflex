import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = function () {
  const categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];

  const democategories = [
    { label: 'Comedy', value: 'comedy' },
    { label: 'Action', value: 'action' },
    { label: 'Horro', value: 'horror' },
    { label: 'Animation', value: 'animation' },
  ];

  return (
    <div className="text-white hidden md:block lg:block xl:block  bg-[#312d2d] max-w-[240px] py-6  h-[calc(100vh-79px)] overflow-scroll    fixed w-[240px] px-5">
      <div className="holder-items">
        <h2 className="mx-4 mb-4">Categories</h2>
        {categories.map(({ label, value }) => (
          <Link to="/" key={value} className="item my-2 block bg-[#423e3e] hover:bg-red-600 transition-all px-4 py-2 rounded-lg  capitalize font-bold font-lg cursor-pointer">
            {label}
          </Link>
        ))}

        <h2 className="mx-2 mb-2 pt-10 ">Genray</h2>
        {democategories.map(({ label, value }) => (
          <Link to="/" key={value} className="item my-2 block bg-[#423e3e] hover:bg-red-600 transition-all px-4 py-2 rounded-lg  capitalize font-bold font-lg cursor-pointer">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
