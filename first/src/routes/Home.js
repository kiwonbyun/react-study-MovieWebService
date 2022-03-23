import Movie from "../Movie";

import { useState, useEffect } from "react";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movieArr, setMovieArr] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    setMovieArr(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>My Favorite Movies({movieArr.length})</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {movieArr.map((v) => {
            return <Movie key={v.id} v={v} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;
