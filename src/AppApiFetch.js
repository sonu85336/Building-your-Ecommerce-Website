import React, { useState } from "react";

import MoviesList from "./ApiFetch/MoviesList";
import "./App.css";

function AppApiFetch() {
  const [movies, setMovies] = useState([]);
  const [isLoading,setIsLoading]=useState(false)
  async function ApiHandler() {
    setIsLoading(true)
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();

    const transformdata = data.results.map((movieList) => {
      return {
        id: movieList.episode_id,
        title: movieList.title,
        releaseDate: movieList.release_date,
        openingText: movieList.opening_crawl,
      };
    });
    setMovies(transformdata);
    setIsLoading(false)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={ApiHandler}>Fetch Movies</button>
      </section>
      <section>
     
{!isLoading && <MoviesList movies={movies} /> }{isLoading  &&    <p>Loading...</p>   }  
      </section>
    </React.Fragment>
  );
}

export default AppApiFetch;
