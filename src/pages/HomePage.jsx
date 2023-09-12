import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { fetchTopMovies } from './api-service';
import MovieCard from '../components/';

function HomePage() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetchTopMovies();
        setTopMovies(response.results);
      } catch (error) {
        console.error('Error fetching top movies:', error);
      }
    }

    fetchMovies();
  }, []);

  return (


    <div className="container mx-auto mt-4">
        <NavBar/>
      <h1 className="text-3xl font-semibold mb-4">Top 10 Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;


// import React from 'react';

// function HomePage() {
//   const movie = {
//     title: 'John Wick 3 : Parabellum',
//     imdbLogoUrl: '../assets/IMDB.png',
//     rating: 86.0 / 100,
//     rottenTomatoUrl: '../assets/RottenTomato.png',
//     description:
//       'John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.',
//   };

//   return (
//     <div className="bg-cover bg-center min-h-screen flex items-center">
//       {/* Background Image (replace with your image) */}
//       <div
//         className="bg-cover bg-center w-full h-full absolute"
//         style={{
//           backgroundImage: `url('/path/to/background-image.jpg')`, // Replace with the background image path
//         }}
//       ></div>

//       <div className="container mx-auto text-white p-4">
//         <div className="md:flex items-center">
//           {/* Movie Details */}
//           <div className="md:w-1/2">
//             <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
//             <div className="flex items-center mb-4">
//               <img
//                 src={movie.imdbLogoUrl}
//                 alt="IMDb Logo"
//                 className="w-6 h-6 mr-2"
//               />
//               <p className="text-xl font-semibold">{movie.rating}</p>
//             </div>
//             <p className="text-lg">{movie.description}</p>
//             <button className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-600">
//               Watch Trailer
//             </button>
//           </div>

//           {/* Empty Space */}
//           <div className="md:w-1/2"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;
