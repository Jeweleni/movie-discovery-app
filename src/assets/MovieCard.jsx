import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
      <p className="text-gray-600 text-sm">{movie.release_date}</p>
    </div>
  );
}

export default MovieCard;
