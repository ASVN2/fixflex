import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../services/TMDB';

const Movies = function () {
  const { data } = useGetMoviesQuery();
  console.log(data);
  // ! when i remove this line everything work fine

  return <h1 className="text-white p-4 pl-10 text-6xl">ALL MOVIES</h1>;
};

export default Movies;

// movies.js
