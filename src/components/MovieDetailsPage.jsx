// MovieDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from './api-service';

function MovieDetailsPage() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await fetchMovieDetails(id);
        setMovieDetails(response);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    fetchDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-semibold">{movieDetails.title}</h1>
      <p className="text-gray-600 text-sm">{movieDetails.release_date}</p>
      <p className="text-gray-700 mt-4">{movieDetails.overview}</p>
    </div>
  );
}

export default MovieDetailsPage;
