import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const x = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${x.id}`)
    ).json();
    setLoading((current) => !current);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>
        {loading ? (
          "loading..."
        ) : (
          <div>
            <img src={movie.medium_cover_image} />
            <h1>{movie.title}</h1>
            <h3>rating: {movie.rating}</h3>
            <p>{movie.description_full}</p>
          </div>
        )}
      </h1>
    </div>
  );
};

export default Detail;
