import React, { useState } from "react";

import MoviesList from "./ApiFetch/MoviesList";
import "./App.css";

function AppApiFetch() {
  const [movies, setMovies] = useState([]);
  async function ApiHandler() {
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
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={ApiHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default AppApiFetch;
